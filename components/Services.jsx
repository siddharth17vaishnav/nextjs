import React,{useState} from "react";
import { isMobile, browserName } from "react-device-detect";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import QRCode from "qrcode.react";
import Script  from "next/script";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
};

const Services = (props) => {
  console.log("PROPS",props)
const [open, setOpen] = useState(false);
const [qrValue, setQrValue] = useState();
const[url,setUrl]=useState("");
const handleOpen = (item) => {
  let id=item.id;
  console.log("ID===.>>>",id)
  setQrValue(id);
  console.log("STATE===",qrValue)
  setUrl(`http://192.168.0.101:3000/${qrValue}`)
  setOpen(true)
  console.log(qrValue);
};


const handleClose = () => setOpen(false);
  
  const data = [
    {
      id: 1,
      model: "model1.glb",
      ios:"",
      tagline: "SERVICES",
      placement:"floor",
      title: "Get AR for your pre-built website",
      des: "Get started with AR on your website with our AR solution, you can showcase your products, services, or offerings in an engaging and interactive manner. With AR, you can provide a more realistic view of your offerings and create a better customer experience.. Our integration procedures are easy to follow, and our developers offer 24-hour integration support.",
      disclaimer:""
    },
    {
      id: 2,
      model: "model2.glb",
      ios:"model2.usdz",
      tagline: "SERVICES",
      placement:"wall",
      title: "Get your AR ready website",
      disclaimer:"",
      des: "A complete web development solution is available to our clients, from design to integration of augmented reality. Our team of expert developers will work with you to discover your business goals and create a unique plan to fulfill them. With our expertise in web development, we will create a website that not only looks great but functions the way it should. A solid web foundation will keep your website online, secure, and easy to navigate.",
      disclaimer:"Place this photo frame on wall"
    },
    {
      id: 3,
      model: "model3.glb",
      ios:"model3.usdz",
      placement:"floor",
      tagline: "SERVICES",
      title: "Get the 360* view of your product.",
      des: "Let your customers view the products in 360* for better understanding. With our AI automated solution, you can create 3D models of your products and integrate them easily. Additionally, our support team is available 24x7 to assist during integration",
      disclaimer:""
    },
  ];

  
  return (
    <>
      <div id="services">
        <div className="text-center mt-[40px] bg-[#131A26] h-full text-white pt-8 pb-8 pl-2 pr-2">
          <span className="text-4xl tracking-wide ">
            All you really care about{" "}
          </span>
          <span className="text-4xl tracking-wide ">
            <span className="text-[#00df9a]">Augmented</span> in one place.
          </span>
        </div>

        {data.map((item) => {
          return (
            <>
              <div className="w-full bg-white  px-4 mt-[90px]" key={item.id}>
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12">
                  <div className="w-full">
                  <model-viewer
                    src={item.model}
                    ios-src={item.ios}
                    alt="A monitor"
                    reveal="auto"
                    loading="eager"
                    interaction-prompt-style="basic"
                    ar
                    ar-placement={item.placement}
                    ar-scale="fixed"
                    ar-modes="webxr scene-viewer quick-look"
                    camera-controls
                    quick-look-browsers="safari chrome"
                    environment-image="neutral"
                    shadow-intensity="0"
                    className="w-full"
                  />
                  <p className="flex items-center mx-auto justify-center text-gray-500">{item.disclaimer}</p>
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold ">{item.tagline}</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                      {item.title}
                    </h1>
                    <p>{item.des} </p>
                 
                     {isMobile ? "":
                      <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3" onClick={()=>handleOpen(item)}>
                        Try Now
                      </button>
        }
                  </div>
                </div>
              </div>
            </>
          );
        })}

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontWeight:"bold"}}>
            View in AR
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Scan the QR code below with your mobile device to open our product example using augmented reality on the web.
          </Typography>
         
				
          <QRCode
        id="qr-gen"
        value={url}
        size={290}
        level={"H"}
        includeMargin={true}
      />
  <Typography sx={{fontSize:"12px"}}>iOS 13+, iPadOS 13+ or Android with ARCore 1.9+ required</Typography>
        </Box>
      </Modal>
      </div>
      <Script src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" type="module"></Script>
    </>
  );
};

export default Services;
