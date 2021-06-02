export default function Estilos() {
  return (
    <style>
      {`
        @keyframes levi {
            0% {
            transform: translatey(0px);
            }
            50% {
            transform: translatey(-2rem);
            }
            100% {
            transform: translatey(0px);
            }
        }
        
        .levitate {
            display: flex;
            justify-content: center;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
            transform: translatey(0px);
            animation: levi 6s ease-in-out infinite;
        }
      
                  /* width */
          ::-webkit-scrollbar {
            width: 10px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: #eeeeee;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background-color: #E4713E;
            border-radius: 15px;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background-color: #E27D6B;
            border-radius: 15px;
          }

      
            `}
    </style>
  );
}
