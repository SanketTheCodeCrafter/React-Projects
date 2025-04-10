import styles from './Button.module.css'

const Button = ({isOutline, icon, text, ...rest}) => {
  return (
     <>
     <button className={`${isOutline? styles.secondary_btn : styles.primary_btn}`} {...rest}>
        {icon}
        {text}
     </button>
     </>
  )
}

export default Button