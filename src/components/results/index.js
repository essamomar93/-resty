import ReactJson from 'react-json-view';
import './results.scss';

export default function Results(myProps) {
  return (
    <section >
      <ReactJson
        name="Headers"
        iconStyle={'triangle'}
        collapsed={false}
        enableClipboard={false}
        displayDataTypes={false}
      />
      <ReactJson
        src={myProps.data}
        name="Response"
        iconStyle={'triangle'}
        collapsed={false}
        enableClipboard={false}
        displayDataTypes={false}
      />
    </section>
  );
}

