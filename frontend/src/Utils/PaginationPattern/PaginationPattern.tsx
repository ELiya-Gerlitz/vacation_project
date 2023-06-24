import "./PaginationPattern.css";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
    currentPage: number;
    // itemsPerPage : number
    onPageChange: (pageNumber: number) => void;
    arrayName: []
    // ComponentToMapOn :React.ReactComponentElement<any, any>
  }
  
function PaginationPattern( props : PaginationProps): JSX.Element {

    const [currentPage, setCurrentPage] = React.useState(1); //Muss das in die andere Componente sein? Oder vielleicht hier?

  // const indexOfLastItem = props.currentPage * props.itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - props.itemsPerPage;
  // const currentItems = props.arrayName.slice(indexOfFirstItem, indexOfLastItem);
  // const totalPages = Math.ceil(props.arrayName.length / props.itemsPerPage);


//   {currentItems.map((cItem) => (
//     {props.ComponentToMapOn, }   ????????
//   ))}

    // const handlePageChange = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
    //     props.onPageChange(pageNumber);
    //   }


    const handlePageChange = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        setCurrentPage(pageNumber);
      }

    

    return (
        <div className="PaginationPattern">

{/* <Pagination>
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      />
      {Array.from({ length: totalPages }).map((_, index) => (
        <Pagination.Item
          key={index + 1}
          active={index + 1 === currentPage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </Pagination> */}

    {/* ********************************* */}
{/* 
            <Stack spacing={2}>
                <Pagination
                    count={totalPages}
                    page={props.currentPage}
                    onChange={handlePageChange}
                    size="large"
                />
            </Stack> */}
		
        </div>
    );
}

export default PaginationPattern;