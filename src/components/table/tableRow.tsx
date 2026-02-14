/* eslint-disable @typescript-eslint/no-explicit-any */

export const RowString = ({ label, value }: { label: string; value: string }) => (
  <tr>
    <th className="px-4 py-2 font-semibold text-gray-800">{label}</th>
    <td className="px-4 py-2">{value ?? "N/A"}</td>
  </tr>
);

export const RowObject = ({ label, value }: { label: string; value: Record<string, any> }) => (
  <tr className=" align-top">
    <th className="px-4 py-2 font-semibold text-gray-800">{label}</th>
    <td className="px-4 py-2">
      {Object.values(value).map((val: any, idx: number) => {
        return <p key={idx}>{val}</p>;
      })}
    </td>
  </tr>
);

export const RowArray = ({ label, value }: { label: string; value: any[] }) => (
  <tr className=" align-top">
    <th className="px-4 py-2 font-semibold text-gray-800">{label}</th>
    <td className="px-4 py-2">
      {value.map((val: any, idx: number) => {
        return <p key={idx}>{val}</p>;
      })}
    </td>
  </tr>
);