/* eslint-disable jsx-a11y/alt-text */

export function WorkCard(props) {
    return(
        <div className="w-[330.58px] h-[450px] border border-gray-400 flex-col justify-start items-start inline-flex">
            <img className="w-[330.58px] h-[201px] border-b border-gray-400" src={props.src} />
            {console.log(props.src)}
            <div className="self-stretch p-2 justify-start items-start gap-2 inline-flex">
                {
                    props.techs.map((item) => {
                        return <div className="text-gray-400 text-base font-normal font-['Fira Code']">{item}</div>
                    })
                }
            </div>
            <div className="self-stretch h-[153px] p-4 border-t border-gray-400 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-white text-2xl font-medium font-['Fira Code']">{props.heading}</div>
                <div className="self-stretch text-gray-400 text-base font-normal font-['Fira Code']">{props.detail}</div>
                <div className="justify-start items-start gap-4 inline-flex">
                <div className="px-4 py-2 border border-purple-400 justify-start items-start gap-2.5 flex">
                    <div className="text-white text-base font-medium font-['Fira Code']">View</div>
                </div>
                </div>
            </div>
        </div>
    );
}