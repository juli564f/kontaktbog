import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Liste(props){
    const {firstname, lastname, email, phone, company, position} = props;

    return(
        <div className="contactContent">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {/* Renderer value fra inputfelter */}
                        <p>Firstname: {firstname}</p>
                        <p>Lastname: {lastname}</p>
                        <p>E-mail: {email}</p>
                    </div>
                    <div className="col-6">
                        <p>Phone: {phone}</p>
                        <p>Company: {company}</p>
                        <p>Position: {position}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

