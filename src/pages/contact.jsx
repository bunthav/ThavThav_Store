import React from 'react'
import BreadCrumps from '../components/BreadCrumps'

function contact() {
  return (
    <div>
      <div>
        
        
        {/* title */}
        <div style={{color: 'white'}}>
          <BreadCrumps pageName="Contact"/>
        </div>
        

        {/* Content page */}
        <section className="bg0 p-t-104 p-b-116">
          <div className="container">
            <div className="flex-w flex-tr">
              <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                <form>
                  <h4 className="mtext-105 cl2 txt-center p-b-30">
                    Send Us A Message
                  </h4>
                  <div className="bor8 m-b-20 how-pos4-parent">
                    <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="email" placeholder="Your Email Address" />
                    <img className="how-pos4 pointer-none" src="images/icons/icon-email.png" alt="ICON" />
                  </div>
                  <div className="bor8 m-b-30">
                    <textarea className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25" name="msg" placeholder="How Can We Help?" defaultValue={""} />
                  </div>
                  <button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
                    Submit
                  </button>
                </form>
              </div>
              <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
                <div className="flex-w w-full p-b-42">
                  <span className="fs-18 cl5 txt-center size-211">
                    <span className="lnr lnr-map-marker" />
                  </span>
                  <div className="size-212 p-t-2">
                    <span className="mtext-110 cl2">
                      Address
                    </span>
                    <p className="stext-115 cl6 size-213 p-t-18">
                      Coza Store. ChongKoh, Koh Oknha Tey, Kandal, Cambodia
                    </p>
                  </div>
                </div>
                <div className="flex-w w-full p-b-42">
                  <span className="fs-18 cl5 txt-center size-211">
                    <span className="lnr lnr-phone-handset" />
                  </span>
                  <div className="size-212 p-t-2">
                    <span className="mtext-110 cl2">
                      Lets Talk
                    </span>
                    <p className="stext-115 cl1 size-213 p-t-18">
                      +123 333 643
                    </p>
                  </div>
                </div>
                <div className="flex-w w-full">
                  <span className="fs-18 cl5 txt-center size-211">
                    <span className="lnr lnr-envelope" />
                  </span>
                  <div className="size-212 p-t-2">
                    <span className="mtext-110 cl2">
                      Sale Support
                    </span>
                    <p className="stext-115 cl1 size-213 p-t-18">
                      eabunthav@gamil.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>	
        {/* Map */}
        <div className="map" style={{marginBottom: '200px'}}>
          <div className="size-303">
            <iframe
              id="google_map"
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18589.891788650017!2d104.93279003162749!3d11.620260553138342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310953813e4f8807%3A0x4abe620d2cd7c87c!2z4Z6A4Z-G4Z6W4Z6E4Z-L4Z6F4Z6Y4Z-S4Z6b4Z6EIOGegOGfhOGfh-Gep-GeieGfieGetuGej-GeuA!5e0!3m2!1skm!2skh!4v1732787131837!5m2!1skm!2skh"
              width="80%"
              height="500"
              style={{ border: 0,
                      marginLeft: '10%'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              
            ></iframe>
          </div>
        </div>
        
        
      </div>

    </div>
  )
}

export default contact