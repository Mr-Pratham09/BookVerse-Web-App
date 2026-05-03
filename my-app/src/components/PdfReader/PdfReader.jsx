import book1 from "../../assets/pdf/pdf1.pdf";

const PdfReader = () => {
  return (
    <div className="container py-10 flex justify-center">
      <iframe
        src={book1}
        title="PDF Viewer"
        className="w-full sm:w-[70%] h-[500px] rounded-md shadow-md"
      />
    </div>
  );
};

export default PdfReader;