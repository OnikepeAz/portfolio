import classes from './Contact.module.css'

function Contact() {
    return(
        <div>
            <div className={classes.container}>
                <div className={classes.right}>
                   <h1 className={classes.heading}>
                     Contact Me
                   </h1>
                   <p className={classes.para}>
                    Need to get in touch? Kindly fill out the form amd we would get back to you as soon as possible.
                   </p>
                </div>
                <div className={classes.left}>
                <form>
                    <div className={classes.field}>
                        <label>Name</label>
                        <input type="text" placeholder='name' />
                    </div>
                    <div className={classes.field}>
                        <label>E-mail</label>
                        <input type="email" placeholder='email' />
                    </div>
                    <div className={classes.field}>
                        <label>Message</label>
                        <textarea type="text" cols="50" placeholder='name' />
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;