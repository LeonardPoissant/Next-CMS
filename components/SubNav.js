




import styled from "styled-components"


const SubNav = (props) => {

    console.log('propsSUBNAV', props)
    /*useEffect(() => {
        fetch(`/posts`)
            .then((res) => res.json())
            .then((data) => {
                setArrayOfPages(data.data)
            })
    }, []);*/

    /* useEffect(() => {
         history.push(`/Posts/${page}`)
     }, [page]);*/

    /*const handleNextPage = () => {
        if (arrayOfPages.length > page) {
            setPage(page + 1)
        }
    };*/
    /* const handlePreviousPage = () => {
         if (page > 1) {
             setPage(page - 1)
         }
     };*/

    /*const handleGoToPage = (page) => {
        setPage(page)
        history.push(`/Posts/${page}`)
    }*/

    //  <Arrow src={LeftArrow} onClick={handlePreviousPage} text={"Previous"} />

    // <Arrow src={RightArrow} onClick={handleNextPage} text={"Next"} />

    return (
        <Wrapper >

            <Arrow  > {"<="}</Arrow>






            <Arrow  > {"=>"}</Arrow>


        </Wrapper>
    )
}

export default SubNav

const Wrapper = styled.div`

width:200px;
display:flex;
justify-content:center;
min-height:50px;


background: linear-gradient(to right,
    #ff4b1f,
    #1fddff)
;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;





`;

const Arrow = styled.div`
padding-top:10px;

cursor:pointer;


`;

