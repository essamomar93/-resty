import React from 'react'
import ReactJson from 'react-json-view';
// import './history.scss';
export default function history(myProps) {
    return (
        <table className="history">

            <tbody>
                {myProps.history.map((val, i) => {
                    return (
                        <tr key={i + val.method + val.url} >
                            <section >
                                <ReactJson
                                    src={myProps.history}
                                    name="History"
                                    iconStyle={'triangle'}
                                    collapsed={false}
                                    enableClipboard={false}
                                    displayDataTypes={false}
                                />
                            </section >

                        </tr>
                    );
                })}
            </tbody>
        </table>

    )

}

