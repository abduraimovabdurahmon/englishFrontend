import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignCenter, faSearch } from "@fortawesome/free-solid-svg-icons";

const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const Words = () => {
  // const [words, setWords] = useState('')
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             console.log("ishladi")
  //             const response = await fetch(URL+'hello');
  //             const data = await response.json()
  //             console.log(data)
  //             setRes(data)
  //             setLoading(false)
  //         } catch (error) {
  //             console.error('Xatolik:', error)
  //         }
  //     }

  //     fetchData()
  // }, [])

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const word = e.target.word.value;
    try {
      const response = await fetch(URL + word);
      const data = await response.json();
      console.log(data);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  return (
    <>
      <Header route="words" />

      <div className="container-fluid">
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handleSubmit}>
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control"
                    name="word"
                    placeholder="So'zni kiriting(inglizcha)"
                  />
                  <button type="submit" className="btn">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <hr />

        <div className="container">
          <div className="row">
            <div className="col-12">
              {loading ? (
                <div className="loadingBox">
                  <div className="loading"></div>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    {data.title ==="No Definitions Found" ?(
                        <center>Topilmadi!</center>
                    ):
                        <>
                            {data.map((wordData, index) => (
                                <div key={index}>
                                <h2>So'z: <span className="text-primary">{wordData?.word}</span></h2>
                                <br />
                                {wordData.phonetics.length > 0 && (
                                    <div>
                                    <h4>Fonetika</h4>
                                    {wordData.phonetics.map((phonetic, i) => (
                                        <div key={i}>
                                        <p>{phonetic.text}</p>
                                        <audio controls>
                                            <source
                                            src={phonetic.audio}
                                            type="audio/mpeg"
                                            />
                                        </audio>
                                        </div>
                                    ))}
                                    </div>
                                )}
                                <br /><br />
                                <div>
                                    {wordData.meanings.map((meaning, j) => (
                                    <div key={j}>
                                        <h3>So'z turi: <span className="text-primary">
                                            {
                                                meaning.partOfSpeech === 'noun' ? 'Ot' : 
                                                meaning.partOfSpeech === 'verb' ? 'Fe\'l' :
                                                meaning.partOfSpeech === 'adjective' ? 'Sifat' :
                                                meaning.partOfSpeech === 'adverb' ? 'Olmosh' :
                                                meaning.partOfSpeech === 'pronoun' ? 'Olmosh' :
                                                meaning.partOfSpeech === 'preposition' ? 'Predlog' :
                                                meaning.partOfSpeech === 'conjunction' ? 'bog\'lovchi' :
                                                meaning.partOfSpeech === 'interjection' ? 'Kesim' :
                                                meaning.partOfSpeech === 'article' ? 'artikl' : 'boshqa'
                                            }
                                        </span></h3>
                                        {meaning.definitions.map((definition, k) => (
                                        <div key={k} className="mt-3">
                                            <p className="text-secondary">{definition.definition}</p>
                                            {definition.example && (
                                            <p>Masalan: <mark>{definition.example}</mark></p>
                                            )}
                                        </div>
                                        ))}
                                        <br />
                                    </div>
                                    ))}
                                </div>
                                
                                <div>
                                    <h4>Sinonimlari</h4>
                                    <ul>
                                    {wordData.meanings
                                        .flatMap((meaning) => meaning.synonyms)
                                        .map((synonym, l) => (
                                        <li key={l} className="text-success">{synonym}</li>
                                        ))}
                                        {wordData.meanings?.flatMap((meaning) => meaning.synonyms).length === 0 && (
                                        <p className="text-danger">Sinonimlar yo'q</p>
                                        )}
                                    </ul>
                                </div>
                                <div>
                                    <h4>Antonimlari</h4>
                                    <ul>
                                    {wordData.meanings
                                        .flatMap((meaning) => meaning.antonyms)
                                        .map((antonym, m) => (
                                        <li key={m} className="text-danger">{antonym}</li>
                                        ))}
                                        {wordData.meanings?.flatMap((meaning) => meaning.antonyms).length === 0 && (
                                        <p className="text-danger">Antonimlar yo'q</p>
                                        )}
                                    </ul>
                                </div>
                                </div>
                            ))}
                        </>
                    }
                  </div>
                </>
                )} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Words;
