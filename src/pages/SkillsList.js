import classes from "./SkillsList.module.css"

function SkillsList(props) {
    return(
        <div className={classes.main}>
            <div className={classes.card}>
               <h2>{props.text}</h2>
               <ul>{props.skillSet}</ul>
            </div>
        </div>
    )
}
export default SkillsList