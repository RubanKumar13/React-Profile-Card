import { useState } from 'react'
import './Qrcode.css'

function Qrcode() {
    const[img,setImg]= useState("");
    const[loading,setLoading]=useState(false);
    const [qrdata,setQrData] = useState("https://youtube.com/");
    const[qrsize,setQrSize]=useState("150")
    
    async function gQr(){
        setLoading(true);
        try{
          const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
        //   use encodeuri component for data encoding like website encoding
          setImg(url);
        }catch(error) {
            console.error( "Error Generating Qr code",error);
        }finally{
                setLoading(false);
            }
    }
    
    function dqr(){
        fetch(img).then((response)=>response.blob()).then((blob)=>{
            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch((error) =>{
            console.error("Error Downloading QR code",error);
        })
    }

  return (
    <div className="container">
        <h1>Qr Code Generator</h1>
        {loading && <p>Please Wait....</p>}
        {img && <img src={img} alt="img" />}
        <div>
            <label htmlFor="input" className='datainput'>Data For Qr Code</label>
            <input type="text" value={qrdata} id='input' onChange={(e)=>setQrData(e.target.value)}/>
            <label htmlFor="Size" className='datainput'>Size For Qr Code</label>
            <input type="text" id='Size' value={qrsize} onChange={(e)=>setQrSize(e.target.value)} />
            <button className='gbutton' onClick={gQr} disable={loading} >Generate Qr Code</button>
            <button className='dbutton' onClick={dqr}>Download Qr Code</button>
        </div>
    </div>
  )
}

export default Qrcode