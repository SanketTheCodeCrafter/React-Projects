import styles from './ContactForm.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import Button from '../Button/Button';
import { useState } from 'react';


const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const OnSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, text)
  }
  return (
    <>
      <section className={`${styles.container}`}>
        <div className={`${styles.contact_form}`}>
          <div className={`${styles.top_btn}`}>

            <Button
              icon={<MdMessage fontSize="24px" />}
              text="Via Support Chat"
            />

            <Button
              icon={<FaPhoneAlt fontSize="24px" />}
              text="Via Call"
            />
          </div>

          <Button
            icon={<MdOutlineMessage fontSize="24px" />}
            text="Via Email Form"
            isOutline={true}
          />
          <form onSubmit={OnSubmit}>
            <div className={`${styles.form_control}`}>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
            <div className={`${styles.form_control}`}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className={`${styles.form_control}`}>
              <label htmlFor="text">Text</label>
              <textarea 
                id="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                required 
                rows={8}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className={`${styles.submit}`}>Submit</button>
            </div>
          </form>
        </div>

        <div className={`${styles.contact_image}`}>
          <img src="/images/service.svg" alt="contact image" />
        </div>

        {/* <div className="form data">
          <p>{name}</p>
          <p>{email}</p>
          <p>{text}</p>
        </div> */}
      </section>
    </>
  )
}

export default ContactForm