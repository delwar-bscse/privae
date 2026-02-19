/* eslint-disable @typescript-eslint/no-explicit-any */

export const RowString = ({ label, value }: { label: string; value?: any }) => {
  // if (!value) return null;
  return (
    <tr>
      <th className="px-4 py-2 font-semibold text-gray-800">{label}</th>
      <td className="px-4 py-2">{value || "N/A"}</td>
    </tr>
  )
};

export const RowObject = ({ label, value }: { label: string; value: Record<string, any> }) => {
  if (!value || typeof value !== "object") return null;
  return (
    <tr className=" align-top">
      <th className="px-4 py-2 font-semibold text-gray-800">{label}</th>
      <td className="px-4 py-2">
        {Object?.values(value).map((val: any, idx: number) => {
          return <p key={idx}>{val}</p>;
        })}
      </td>
    </tr>
  )
};

export const RowArray = ({ label, value }: { label: string; value: any[] }) => {
  if (!value?.length || !Array.isArray(value)) return null;
  return (
    <tr className=" align-top">
      <th className="px-4 py-2 font-semibold text-gray-800">{label}</th>
      <td className="px-4 py-2">
        {value?.map((val: any, idx: number) => {
          return <p key={idx}>{val}</p>;
        })}
      </td>
    </tr>
  )
};