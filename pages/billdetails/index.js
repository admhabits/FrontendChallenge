import { useEffect, useState } from 'react'
import Header from '../../components/layouts/Header'
import axios from 'axios';

export default function BillDetails() {
 const [rawData, setRawData] = useState([]);
 const [denom, setDenom] = useState([]);
 const getAllBill = async () => {
    try {
        const newData = [];
        const res = await axios.get('/api/bill');
        console.log(res.data);
        setRawData(res.data);
        res.data.map(item => {
            newData.push(parseInt(item.body[0].split(':')[1]));
        })
        console.log(newData);
        setDenom(newData);
    } catch (error) {
        alert(error)
    }
 }

 const filterBill = async () => {
    try {
        const newData = [];
        const res = await axios.get('/api/bill');
        console.log(res.data);
        res.data.map(item => {
            newData.push(parseInt(item.body[0].split(':')[1]));
        })
        console.log(newData);
        setDenom(newData.filter((item) => item >= 100000));
    } catch (error) {
        alert(error)
    }
 }

 const filterBillLess = async () => {
    try {
        const newData = [];
        const res = await axios.get('/api/bill');
        console.log(res.data);
        res.data.map(item => {
            newData.push(parseInt(item.body[0].split(':')[1]));
        })
        console.log(newData);
        setDenom(newData.filter((item) => item <= 100000));
    } catch (error) {
        alert(error)
    }
 }
 useEffect(() => {
   getAllBill();

 }, [])
 
  return (
    <div className='container p-2'>
        <Header/>
        <div className='row mb-3'>
            <div className='col-md-6'>
                <h4 className='text-primary text-uppercase'>Filter Billing Detail</h4>
            </div>
            <div className='col-md-6 d-flex justify-content-end gap-2'>
                <button onClick={getAllBill} className='btn btn-success'>{"Show All"}</button>
                <button onClick={filterBill} className='btn btn-primary'>{"DENOM >= 100.000"}</button>
                <button onClick={filterBillLess} className='btn btn-warning'>{"DENOM <= 100.000"}</button>
            </div>
        </div>
        <div className='row'>
           {
            denom.length !== 0 ? (
               denom.map((item) => (
                <div className='col-md-6 col-lg-4 col-sm-12 mb-1'>
                    <div className='card'>
                        <div className='card-header'>DENOM : {item}</div>
                    </div>
                </div> 
               ))
            ) : (
                <div className='col-12'>
                   <p className='text-center'>Tidak ditemukan data!</p>
                </div>  
            )
           }
            
            <div className='col-md-6 mt-3'>
                <div className='card'>
                    <div className='card-header'>JSON API RESPONSE</div>
                    <div className='card-body'>
                    <pre>{
                        JSON.stringify(rawData, null, 3)
                    }</pre>
                    </div>
                </div>
            </div>

            <div className='col-md-6 mt-3'>
                <div className='card'>
                    <div className='card-header'>JSON FILTER RESULT</div>
                    <div className='card-body'>
                    <pre>{
                        JSON.stringify(denom, null, 3)
                    }</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
