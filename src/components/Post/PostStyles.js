import  styled  from 'styled-components';

export const DivContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    .modal-overlay {
    background: #ececec;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    }

    .modal-content {
    width: 90%;
    max-width: 500px;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    }

    button {
    padding: 5px;
    font-size: large;
    float: right;
    cursor: pointer;
    }

`;