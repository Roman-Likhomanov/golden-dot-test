import React, { useState, useEffect } from "react";
import './../Courses/courses.css';
import * as axios from 'axios';
import dateFormat from "dateformat";

const Details = ({ courseDetails }) => {
    const [objToday, setObjToday] = useState('');
    const [objDay2, setObjDay2] = useState('');
    const [objDay3, setObjDay3] = useState('');
    const [objDay4, setObjDay4] = useState('');
    const [objDay5, setObjDay5] = useState('');
    const [objDay6, setObjDay6] = useState('');
    const [objDay7, setObjDay7] = useState('');
    const [objDay8, setObjDay8] = useState('');
    const [objDay9, setObjDay9] = useState('');
    const [objDay10, setObjDay10] = useState('');

    let charCode = courseDetails['CharCode'];

    useEffect(() => {
        axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
            .then(response => {
                setObjToday(response.data);
            });
    }, []);

    let valute = objToday['Valute'];
    let value = valute && valute[charCode] ? valute[charCode]['Value'] : null;
    let valueFix = valute && valute[charCode] ? (valute[charCode]['Value']).toFixed(2) : null;
    let previous = valute && valute[charCode] ? valute[charCode]['Previous'] : null;
    let url2 = objToday.PreviousURL;

    let correctDate = () => {
        let date = objToday.Date;
        return dateFormat(date, "dd.mm.yy");
    };
    let getDifference = () => {
        if (value > previous) {return (value / previous - 1) * 100 } 
        else {return (previous / value - 1) * -100 }
    };

    useEffect(() => {
        axios.get(url2)
            .then(res => {
                setObjDay2(res.data);
            });
    }, [url2]);

    let valute2 = objDay2['Valute'];
    let value2 = valute2 && valute2[charCode] ? valute2[charCode]['Value'] : null;
    let valueFix2 = valute2 && valute2[charCode] ? (valute2[charCode]['Value']).toFixed(2) : null;
    let previous2 = valute2 && valute2[charCode] ? valute2[charCode]['Previous'] : null;
    let url3 = objDay2.PreviousURL;

    let correctDate2 = () => {
        let date = objDay2.Date;
        return dateFormat(date, "dd.mm.yy");
    }
    let getDifference2 = () => {
        if (value2 > previous2) {return (value2 / previous2 - 1) * 100 } 
        else {return (previous2 / value2 - 1) * -100 }
    };

    useEffect(() => {
        axios.get(url3)
            .then(res => {
                setObjDay3(res.data);
            });
    }, [url3]);

    let valute3 = objDay3['Valute'];
    let value3 = valute3 && valute3[charCode] ? valute3[charCode]['Value'] : null;
    let valueFix3 = valute3 && valute3[charCode] ? (valute3[charCode]['Value']).toFixed(2) : null;
    let previous3 = valute3 && valute3[charCode] ? valute3[charCode]['Previous'] : null;
    let url4 = objDay3.PreviousURL;

    let correctDate3 = () => {
        let date = objDay3.Date;
        return dateFormat(date, "dd.mm.yy");
    }
    let getDifference3 = () => {
        if (value3 > previous3) {return (value3 / previous3 - 1) * 100 } 
        else {return (previous3 / value3 - 1) * -100 }
    };

    useEffect(() => {
        axios.get(url4)
            .then(res => {
                setObjDay4(res.data);
            });
    }, [url4]);

    let valute4 = objDay4['Valute'];
    let value4 = valute4 && valute4[charCode] ? valute4[charCode]['Value'] : null;
    let valueFix4 = valute4 && valute4[charCode] ? (valute4[charCode]['Value']).toFixed(2) : null;
    let previous4 = valute4 && valute4[charCode] ? valute4[charCode]['Previous'] : null;
    let url5 = objDay4.PreviousURL;
    let correctDate4 = () => {
        let date = objDay4.Date;
        return dateFormat(date, "dd.mm.yy");
    }
    let getDifference4 = () => {
        if (value4 > previous4) {return (value4 / previous4 - 1) * 100 } 
        else {return (previous4 / value4 - 1) * -100 }
    };

    useEffect(() => {
        axios.get(url5)
            .then(res => {
                setObjDay5(res.data);
            });
    }, [url5]);

    let valute5 = objDay5['Valute'];
    let value5 = valute5 && valute5[charCode] ? valute5[charCode]['Value'] : null;
    let valueFix5 = valute5 && valute5[charCode] ? (valute5[charCode]['Value']).toFixed(2) : null;
    let previous5 = valute5 && valute5[charCode] ? valute5[charCode]['Previous'] : null;
    let url6 = objDay5.PreviousURL;

    let correctDate5 = () => {
        let date = objDay5.Date;
        return dateFormat(date, "dd.mm.yy");
    }
    let getDifference5 = () => {
        if (value5 > previous5) {return (value5 / previous5 - 1) * 100 } 
        else {return (previous5 / value5 - 1) * -100 }
    };

    useEffect(() => {
        axios.get(url6)
            .then(res => {
                setObjDay6(res.data);
            });
    }, [url6]);

    let valute6 = objDay6['Valute'];
    let value6 = valute6 && valute6[charCode] ? valute6[charCode]['Value'] : null;
    let valueFix6 = valute6 && valute6[charCode] ? (valute6[charCode]['Value']).toFixed(2) : null;
    let previous6 = valute6 && valute6[charCode] ? valute6[charCode]['Previous'] : null;
    let url7 = objDay6.PreviousURL;

    let correctDate6 = () => {
        let date = objDay6.Date;
        return dateFormat(date, "dd.mm.yy");
    }
    let getDifference6 = () => {
        if (value > previous) {return (value / previous - 1) * 100 } 
        else {return (previous / value - 1) * -100 }
    };

    useEffect(() => {
        axios.get(url7)
            .then(res => {
                setObjDay7(res.data);
            });
    }, [url7]);

    let valute7 = objDay7['Valute'];
    let value7 = valute7 && valute7[charCode] ? valute7[charCode]['Value'] : null;
    let valueFix7 = valute7 && valute7[charCode] ? (valute7[charCode]['Value']).toFixed(2) : null;
    let previous7 = valute7 && valute7[charCode] ? valute7[charCode]['Previous'] : null;
    let url8 = objDay7.PreviousURL;

    let correctDate7 = () => {
        let date = objDay7.Date;
        return dateFormat(date, "dd.mm.yy");
    }
    let getDifference7 = () => {
        if (value7 > previous7) {return (value7 / previous7 - 1) * 100 } 
        else {return (previous7 / value7 - 1) * -100 }
    };

    useEffect(() => {
        axios.get(url8)
            .then(res => {
                setObjDay8(res.data);
            });
    }, [url8]);

    let valute8 = objDay8['Valute'];
    let value8 = valute8 && valute8[charCode] ? valute8[charCode]['Value'] : null;
    let valueFix8 = valute8 && valute8[charCode] ? (valute8[charCode]['Value']).toFixed(2) : null;
    let previous8 = valute8 && valute8[charCode] ? valute8[charCode]['Previous'] : null;
    let url9 = objDay8.PreviousURL;

    let correctDate8 = () => {
        let date = objDay8.Date;
        return dateFormat(date, "dd.mm.yy");
    }
    let getDifference8 = () => {
        if (value8 > previous8) {return (value8 / previous8 - 1) * 100 } 
        else {return (previous8 / value8 - 1) * -100 }
    };

    useEffect(() => {
        axios.get(url9)
            .then(res => {
                setObjDay9(res.data);
            });
    }, [url9]);

    let valute9 = objDay9['Valute'];
    let value9 = valute9 && valute9[charCode] ? valute9[charCode]['Value'] : null;
    let valueFix9 = valute9 && valute9[charCode] ? (valute9[charCode]['Value']).toFixed(2) : null;
    let previous9 = valute9 && valute9[charCode] ? valute9[charCode]['Previous'] : null;
    let url10 = objDay9.PreviousURL;

    let correctDate9 = () => {
        let date = objDay9.Date;
        return dateFormat(date, "dd.mm.yy");
    }
    let getDifference9 = () => {
        if (value9 > previous9) {return (value9 / previous9 - 1) * 100 } 
        else {return (previous9 / value9 - 1) * -100 }
    };

    useEffect(() => {
        axios.get(url10)
            .then(res => {
                setObjDay10(res.data);
            });
    }, [url10]);

    let valute10 = objDay10['Valute'];
    let value10 = valute10 && valute10[charCode] ? valute10[charCode]['Value'] : null;
    let valueFix10 = valute10 && valute10[charCode] ? (valute10[charCode]['Value']).toFixed(2) : null;
    let previous10 = valute10 && valute10[charCode] ? valute10[charCode]['Previous'] : null;
    let correctDate10 = () => {
        let date = objDay10.Date;
        return dateFormat(date, "dd.mm.yy");
    }
    let getDifference10 = () => {
        if (value10 > previous10) {return (value10 / previous10 - 1) * 100 } 
        else {return (previous10 / value10 - 1) * -100 }
    };

    return (
        <div className="container">
            <h2>{charCode}</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th className="tdName">Дата</th>
                        <th className="tdMail">Курс ₽</th>
                        <th className="tdDate">Изменение курса %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{correctDate()}</td>
                        <td>{valueFix}</td>
                        <td>{getDifference().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>{correctDate2()}</td>
                        <td>{valueFix2}</td>
                        <td>{getDifference2().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>{correctDate3()}</td>
                        <td>{valueFix3}</td>
                        <td>{getDifference3().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>{correctDate4()}</td>
                        <td>{valueFix4}</td>
                        <td>{getDifference4().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>{correctDate5()}</td>
                        <td>{valueFix5}</td>
                        <td>{getDifference5().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>{correctDate6()}</td>
                        <td>{valueFix6}</td>
                        <td>{getDifference6().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>{correctDate7()}</td>
                        <td>{valueFix7}</td>
                        <td>{getDifference7().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>{correctDate8()}</td>
                        <td>{valueFix8}</td>
                        <td>{getDifference8().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>{correctDate9()}</td>
                        <td>{valueFix9}</td>
                        <td>{getDifference9().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>{correctDate10()}</td>
                        <td>{valueFix10}</td>
                        <td>{getDifference10().toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Details;
