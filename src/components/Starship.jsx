
export default function Starship ({ data }) {
    return (
        <div className = "container">
            {data.map((item, index) => {
                return(
                    <div key = {index} className = "name">
                        {item.name}
                    </div>
                )
            }
            )}
        </div>
    )
}