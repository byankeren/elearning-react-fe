import { useEffect, useState } from "react";
import { Student, columns } from "./columns";
import { DataTable } from "../../components/data-table/data-table";

async function getData(): Promise<Student[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Abyan",
      major: "RPL",
      grade: "X",
    },
    {
      id: "728ed52f",
      name: "Byan",
      major: "TKJ",
      grade: "XII",
    },
    {
      id: "728ed52f",
      name: "Yan",
      major: "MM",
      grade: "XI",
    },
    // Add more sample data as needed
  ];
}

export default function StudentPage() {
  const [data, setData] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts.

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading state
  }

  return (
      <DataTable columns={columns} data={data} />
  );
}
