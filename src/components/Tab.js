

function Tab ({children, activeTab}){
    console.log(children)
return(
    <div>
        <nav>
            {children.map((tab,index)=><button key={index}>{tab.props.title}</button>)}
        </nav>
        {children}
    </div>
)
}

Tab.panel =function({children, title}){
    return(
        <div>{children}</div>
    )
}
export default Tab;