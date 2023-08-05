import React from 'react'
import Navbar from '../../components/Navbar';
import bgImage from '../../assests/about-us-assets/overview.jpg'

function Overview() {
  return (
    <div className=''>
        <Navbar/>
        <div className ='flex justify-center items-start w-screen h-screen max-w-7xl m-auto mt-36'>
          <div className=''>
            <h1 className='font-semibold text-blue-800 text-4xl'>Overview of Pelikas Healthcare</h1>
            <div className='m-10 w-[800px]'>
              <div className='flex text-xl  justify-between'>
                <p className='font-semibold'>Business Type</p>
                <p>Pharmaceutical Contract Manufacturer & Service Provider</p>
              </div>
              <div className=' h-[1px] bg-slate-600 bg-opacity-40 max-w-full mt-4'></div>
            </div>
            <div className='m-10 w-[800px]'>
              <div className='flex text-xl  justify-between'>
                <p className='font-semibold'>Year of Establishment	</p>
                <p className='text-lg'>2008</p>
              </div>
              <div className=' h-[1px] bg-slate-600 bg-opacity-40 max-w-full mt-4'></div>
            </div>
            <div className='m-10 w-[800px]'>
              <div className='flex text-xl  justify-between'>
                <p className='font-semibold'>Company CEO & Promoter	</p>
                <p className='text-lg'>	Mr. Manoj Aggarwal</p>
              </div>
              <div className=' h-[1px] bg-slate-600 bg-opacity-40 max-w-full mt-4'></div>
            </div>
            <div className='m-10 w-[800px]'>
              <div className='flex text-xl  justify-between'>
                <p className='font-semibold'>Industry</p>
                <p className='text-lg'>Manufacturing an effective range of Pharmaceutical Medicines</p>
              </div>
              <div className=' h-[1px] bg-slate-600 bg-opacity-40 max-w-full mt-4'></div>
            </div>
            <div className='m-10 w-[800px]'>
              <div className='flex text-xl  justify-between'>
                <p className='font-semibold'>Registered Address	</p>
                <p className='text-lg'>Plot No :46 First Floor, Industrial Area Phase-2,Chandigarh-160002</p>
              </div>
              <div className=' h-[1px] bg-slate-600 bg-opacity-40 max-w-full mt-4'></div>
            </div>
            <div className='m-10 w-[800px]'>
              <div className='flex text-xl  justify-between'>
                <p className='font-semibold'>Legal Status of Firm	</p>
                <p className='text-lg'>Private Ltd. Co. Registered under Indian Companies Act 1956</p>
              </div>
              <div className=' h-[1px] bg-slate-600 bg-opacity-40 max-w-full mt-4'></div>
            </div>
            <div className='m-10 w-[800px]'>
              <div className='flex text-xl  justify-between'>
                <p className='font-semibold'>Warehousing Facility	</p>
                <p className='text-lg'>yes</p>
              </div>
              <div className=' h-[1px] bg-slate-600 bg-opacity-40 max-w-full mt-4'></div>
            </div>
            <div className='m-10 w-[800px]'>
              <div className='flex text-xl  justify-between'>
                <p className='font-semibold'>Original Equipment Manufacturer	</p>
                <p className='text-lg'>yes</p>
              </div>
              <div className=' h-[1px] bg-slate-600 bg-opacity-40 max-w-full mt-4'></div>
            </div>
            <div className='m-10 w-[800px]'>
              <div className='flex text-xl  justify-between'>
                <p className='font-semibold'>Credir Rated	</p>
                <p className='text-lg'>Yes</p>
              </div>
              <div className=' h-[1px] bg-slate-600 bg-opacity-40 max-w-full mt-4'></div>
            </div>
            <div className='m-10 w-[800px]'>
              <div className='flex text-xl  justify-between'>
                <p className='font-semibold'>Standard Certifications	</p>
                <p className='text-lg'>WHO,GMP,GLP,ECA,& ISO 9001-2015 Certified</p>
              </div>
              <div className=' h-[1px] bg-slate-600 bg-opacity-40 max-w-full mt-4'></div>
            </div>
            <div className='m-10 w-[800px]'>
              <div className='flex text-xl  justify-between'>
                <p className='font-semibold'>Shipment Mode		</p>
                <p className='text-lg'>By Road</p>
              </div>
              <div className=' h-[1px] bg-slate-600 bg-opacity-40 max-w-full mt-4'></div>
            </div>
            <div className='m-10 w-[800px]'>
              <div className='flex text-xl  justify-between'>
                <p className='font-semibold'>Payment Mode	</p>
                <ul>
                  <li>- Cash On Delivery (COD)</li>
                  {/* <li>- Credit Card Payment</li> */}
                  <li>- Debit/Credit Card Payment</li>
                  <li>- Net Banking Transfer</li>
                  <li>- UPI Payment</li>
                  <li>- DD</li>
                  <li>- Cheque</li>
                </ul>
              </div>
              <div className=' h-[1px] bg-slate-600 bg-opacity-40 max-w-full mt-4'></div>
            </div>
            <div className='m-10 w-[800px]'>
              <div className='flex text-xl  justify-between'>
                <p className='font-semibold'>Quality Measures/Testing Facilities	</p>
                <p className='text-lg'>Yes</p>
              </div>
              <div className=' h-[1px] bg-slate-600 bg-opacity-40 max-w-full mt-4'></div>
            </div>
            

            
          </div>
          <img src={bgImage} alt='' width={400} className='rounded-full'/>
        </div>
        {/* <Navbar/> */}
    </div>

  )
}

export default Overview;