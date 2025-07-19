type SeparatorProp = {
    isFirst : boolean
}
const MenuSeparator = ({isFirst} : SeparatorProp)  => {
    return (
        <span className={`menu-separator border-b-[5px] border-b-[#d5dbdb] p-0 block ${isFirst && "mt-[5px]"}`}></span>
    )
}

export default MenuSeparator