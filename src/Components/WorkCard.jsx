/* eslint-disable jsx-a11y/alt-text */
import { FlatButton } from '../Components/FlatButton';

export function WorkCard(props) {
    return(
        <div className="w-full h-auto border border-gray-400 flex-col justify-start items-start inline-flex">
            <img className="w-full h-auto border-b border-gray-400" src={props.src} />
            <div className="self-stretch p-2 justify-start items-start gap-2 inline-flex">
                {
                    props.techs.map((item) => {
                        return <div className="text-gray-400 text-base font-normal font-['Fira Code']">{item}</div>
                    })
                }
            </div>
            <div className="self-stretch h-auto p-4 border-t border-gray-400 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-white text-2xl font-medium font-['Fira Code']">{props.heading}</div>
                <div className="self-stretch text-gray-400 text-base font-normal font-['Fira Code']">{props.detail}</div>
                <div className="justify-start items-start gap-4 inline-flex">
                    <FlatButton stateProp="default" text="View" type="primary" />
                </div>
            </div>
        </div>
    );
}