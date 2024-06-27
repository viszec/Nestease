import "../styles/Footer.scss";
import { LocalPhone, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" /></a>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Return and Refund Policy</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>

        <ul>
          <li className="footer_right_info"><LocalPhone />+1 234 567 89</li>
          <li className="footer_right_info"><Email />nestease@support.com</li>
          <img src={`${process.env.PUBLIC_URL}/assets/payment.png`} alt="payment" />
        </ul>


      </div>
    </div>
  )
}

export default Footer