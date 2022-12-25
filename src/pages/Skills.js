import SkillsList from "./SkillsList";

function Skills() {
    return(
        <div>
         <h1 align='center'>Skills</h1>
         <SkillsList text='Programming Language'/>
         <SkillsList text='Frontend Technology'/>
         <SkillsList text='Database '/>
         <SkillsList text='Backend'/>
        </div>
    )
}
export default Skills;