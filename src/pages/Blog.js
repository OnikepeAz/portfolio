import classes from "./Blog.module.css"

function Blog() {
    return(
        <div>
            <div className={classes.container}>
                 <div className={classes.left}></div>
                <div className={classes.right}>
                   <h1 className={classes.heading}>
                     This is a heading!
                   </h1>
                   <p className={classes.lorem}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste nihil, quasi eos aspernatur doloribus quos consequatur animi. In, nemo!
                   </p>
                </div>
            </div>
        </div>
    )
}
export default Blog;