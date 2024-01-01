/* eslint-disable array-callback-return */

/* eslint-disable jsx-a11y/alt-text */

export function SkillCard(props) {
    return(
        <div className="w-auto h-auto py-2 border border-gray-400 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch px-2 justify-start items-start inline-flex">
                <div className="text-white text-base font-semibold font-['Fira Code']">{props.type}</div>
            </div>
            <div className="self-stretch h-[0px] origin-center rotate-180 border border-gray-400"></div>
            <div className="px-2 flex-col justify-start items-start gap-2 flex">
                <div className="justify-start items-start gap-2 inline-flex">
                    {
                        props.names.map((item) => {
                            return <div className="text-gray-400 text-base font-normal font-['Fira Code']">{item}</div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}