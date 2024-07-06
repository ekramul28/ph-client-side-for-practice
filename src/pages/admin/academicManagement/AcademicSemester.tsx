import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemister";

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);
  return <div>this is AcademicSemester</div>;
};

export default AcademicSemester;
