import classNames from "classnames";
function Button({text,variant='default'}){
return(
    <button className={classNames({

        "p-4 h-10 flex items-center rounded":true,
        "bg-green-100":variant=="success",
        "bg-yellow-100":variant=="warning",
        "bg-red-100":variant=="danger",
        "bg-gray-100":variant=="default",
    })}>{text} {variant}</button>
)
}
export default Button;