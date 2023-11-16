import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react'

export default function Liste(props){
    const {firstname, lastname, email, phone, company, position, setContacts} = props;

    const fetchContacts = async () => {
        const tableName = "kontaktbog";
        const projectUrl = "https://aebosyspfyekoolamwcn.supabase.co"
        const data = await fetch(projectUrl + '/rest/v1/' + tableName, {
          headers: {
            apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlYm9zeXNwZnlla29vbGFtd2NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyODA0NTAsImV4cCI6MjAxNDg1NjQ1MH0.Y4EYDEYI47o7OJryrOkk3a0NztUz2RfolOES4cN3Ytc'
          }
        }).then(result => result.json())
    
        console.log(data);
        setContacts(data)
      }
    
      useEffect(() => {
        fetchContacts();
      }, []) // tomt array, betyder kør en gang.
    

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

