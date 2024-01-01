
export default function SmallProjectCard(props) {
    return(
        <div>
            <div className="w-auto max-w-[345px] h-auto border border-gray-400 flex-col justify-start items-start inline-flex">
                <div className="self-stretch p-2 justify-start items-start gap-2 inline-flex">
                    {
                        props.techs.map((item) => {
                            return <div className="text-gray-400 text-base font-normal font-['Fira Code']">{item}</div>
                        })
                    }
                </div>
                <div className="self-stretch h-auto p-4 border-t border-gray-400 flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch text-white text-2xl font-medium font-['Fira Code']">{props.name}</div>
                    <div className="self-stretch text-gray-400 text-base font-normal font-['Fira Code']">{props.desc}</div>
                </div>
            </div>
        </div>
    );
}