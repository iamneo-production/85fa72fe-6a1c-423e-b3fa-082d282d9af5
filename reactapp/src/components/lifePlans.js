import '../css/lifeplan.css'
import max from '../assets/max.png'
import lic from '../assets/lic.png'
import { Link } from 'react-router-dom'
import Top from './top'
import download from'../assets/download.png'
import { Button } from 'bootstrap'
const LifePlans = () =>
{
    const logo =
    {
        width: '105px',
        height: '100px',
    }
    const outer = 
    {
        margin: '30px',
    }
    return (
        <div>
            <Top/>
        <div style={outer}>
            
          <table>
  <thead>
    <tr>
      <th>Policy Provider</th>
      <th>Policy Name</th>
      <th>Policy Type</th>
      <th>Coverage Amount</th>
      <th>Policy Term</th>
      <th>Amount Per Month</th>
      <th>Premium</th>
      <th>Download Brochure</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src={max} style={logo}/></td>
      <td>Jeevan</td>
      <td>Term Life Insurance</td>
      <td>₹100,000</td>
      <td>10 years</td>
      <td>₹50/month</td>
      <td>Gold</td>
      <td>
        <img src={download} style={{height:'15px',width:'15px',marginRight:'15px'}}/>
        <a href="/C:\Users\aksha\OneDrive\Desktop\insurance\src\document\star.pdf" download style={{fontSize:'15px'}}>Download Brochure</a>
        <Link to='/more' ><h4 style={{marginTop:'2px',color:'red'}}>More Details..</h4></Link>
      </td>
      <td>
      <Link to='/life'><button style={{backgroundColor:'green',border:'none',width:'80px',height:'30px',color:'white'}}>Apply Now</button></Link>
      </td>
    </tr>


    <tr>
    <td><img src={lic} style={logo}/></td>
      <td>Life Care</td>
      <td>Whole Life Insurance</td>
      <td>₹200,000</td>
      <td>20 years</td>
      <td>₹50/month</td>
      <td>Platinum</td>
      <td>
        <img src={download} style={{height:'15px',width:'15px',marginRight:'15px'}}/>
        <a href="/C:\Users\aksha\OneDrive\Desktop\insurance\src\document\star.pdf" download>Download Brochure</a>
        <Link to='/more' ><h4 style={{marginTop:'2px',color:'red'}}>More Details..</h4></Link>
    </td>
    <td>
    <Link to='/life'><button style={{backgroundColor:'green',border:'none',width:'80px',height:'30px',color:'white'}}>Apply Now</button></Link>
      </td>
    </tr>

    <tr>
    <td><img src={lic} style={logo}/></td>
      <td>SecureLife Plus</td>
      <td>Survivorship Life Insurance</td>
      <td>₹300,000</td>
      <td>15 years</td>
      <td>₹100/month</td>
      <td>Regular</td>
      <td>
        <img src={download} style={{height:'15px',width:'15px',marginRight:'15px'}}/>
        <a href="/C:\Users\aksha\OneDrive\Desktop\insurance\src\document\star.pdf" download>Download Brochure</a>
        <Link to='/more' ><h4 style={{marginTop:'2px',color:'red'}}>More Details..</h4></Link>
    </td>
    <td>
            <Link to='/life'><button style={{backgroundColor:'green',border:'none',width:'80px',height:'30px',color:'white'}}>Apply Now</button></Link>
      </td>
    </tr>

  </tbody>
          </table>

        </div>
        </div>
    );
}
export default LifePlans