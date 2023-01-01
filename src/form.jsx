import { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import $ from "jquery";

export function Form(props) {
  const [shortenLink, setshortenLink] = useState("");
  const [copied, setcopied] = useState(false);
  const [value, setvalue] = useState("");
  const [loading, setloading] = useState(false);
  const data = useRef()


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${props.input}`
      );
      const newData = await response.json();
      setshortenLink(newData.result.short_link);
      setloading(false);
    };
    fetchData();
  }, [props.input]);


  function handleInput(e) {
    setvalue(e.target.value);
  }

  function handleClick() {
    if(value.length > 5){
      localStorage. setItem('input', data.current.value);
    localStorage. setItem('shortcode', shortenLink);
    props.setinput(value);
    setvalue("");
    setloading(true);
    $(".error").hide()
    $(".input").css("border","2px solid")
    }
    if(value.length < 5){
      $(".error").show()
      $(".input").css("border","2px solid red")
    }
  }

  useEffect(() => {
		if (window.localStorage !== undefined) {
			const data = window.localStorage.getItem('input');
      props.setinput(data)
		}
	}, []);

 function handleCopy() {
  setcopied(true)
  $(".copy").css("backgroundColor","hsl(257, 27%, 26%)")
 }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center shorten rounded bg-[url('./images/bg-shorten-mobile.svg')] md:bg-[url('./images/bg-shorten-desktop.svg')] mt-12 w-10/12">
        <div className="mt-8 flex flex-col w-10/12 h-full md:px-8 md:flex-row md:w-full md:mb-4 md:mt-8 md:justify-center md:items-center">
         <div className="flex flex-col w-full justify-center">
         <input
            type="text"
            placeholder="shorten a link here..."
            className="border w-full pl-4 py-2 rounded md:w-11/12 md:mr-4 input"
            value={value}
            onChange={handleInput}
            ref= {data}
          />
          <p className="mt-2 hidden text-red-400 text-left error">Please add a link</p>
         </div>
          <input
            type="submit"
            value="Shorten it!"
            className="border mt-4 mb-8 py-2 rounded md:my-0 md:px-4 shorten_it  cursor-pointer"
            onClick={handleClick}
          />
        </div>
        <>
          {!loading ? (
         null
          ) : (
            <div class="flex justify-center items-center">
              <div
                class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                role="status"
              >
                <span class="visually-hidden">...</span>
              </div>
            </div>
          )}
        </>
      </div>
      {shortenLink? (<div className="flex flex-col mt-4 bg-white items-center w-10/12 p-4 rounded md:flex-row md:w-10/12 md:justify-between md:py-0">
        <div className="border-b text-xs md:border-none p-4 md:text-lg">{props.input.slice(0, 40)}...</div>
         <div className="flex flex-col md:flex-row md:items-center md:w-64">
         <div className="mt-4 short md:mr-4 md:mt-0">{shortenLink}</div>
         
         <CopyToClipboard
                  text={shortenLink}
                  onCopy={() => setcopied(true)}
                >
                  <button className="start copy w-full py-2 rounded mt-4 mb-4 md:w-64" onClick={handleCopy} >{copied ? "Copied!" : "Copy!"}</button>
                </CopyToClipboard>
         </div>
      </div>): null}
    </div>
  );
}
