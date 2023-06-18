import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import englishAlphabet from "./englishAlphabet";
import Footer from "../components/Footer";

const Alphabet = () => {
  return (
    <>
      <Header route="alphabet" />

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text mt-5">
              <b>Ingliz alifbosi haqida:</b>
              <i>
                <p>
                  Ingliz alifbosi - bu ingliz tilini ifodalash uchun
                  ishlatiladigan yozuv tizimi. U katta (katta harflar) va kichik
                  (kichik harflar) 26 ta harfdan iborat. Ingliz alifbosi yunon
                  alifbosidan moslashtirilgan va Finikiya alifbosidan kelib
                  chiqqan lotin alifbosiga asoslangan.
                </p>
                <p>Ingliz alifbosi quyidagi harflarni o'z ichiga oladi:</p>
                <p class="text-primary">
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                </p>
                <p>
                  Ushbu harflar so'zlarni shakllantirish va ingliz tilidagi
                  tovushlarni ifodalash uchun ishlatiladi. Har bir harfning
                  oʻziga xos nomi bor va u maʼlum bir tovush yoki tovushlar
                  bilan bogʻlangan, ammo talaffuzda turlicha boʻlishi mumkin.
                </p>
              </i>
            </div>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Harf</th>
                  <th scope="col">Talaffuz</th>
                  <th scope="col">Misol</th>
                  <th scope="col">Aytilishi</th>
                </tr>
              </thead>
              <tbody>
                {englishAlphabet.map((item, index) => {
                  const [isPlaying, setIsPlaying] = useState(false);
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.letter}</td>
                      <td>{item.phonetic}</td>
                      <td>{item.word}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={isPlaying ? faPause : faPlay}
                          onClick={(e) => {
                            setIsPlaying(!isPlaying);

                            const utterance = new SpeechSynthesisUtterance(
                              item.letter
                            );
                            speechSynthesis.speak(utterance);

                            utterance.onend = () => {
                              setIsPlaying(false);
                            };
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="text mt-5">
              <i>
                <p>
                  Ingliz tilida 26 ta harfdan tashqari, "th", "sh" va "ch" kabi
                  muayyan tovushlarni ifodalash uchun turli harf birikmalaridan
                  ham foydalaniladi. Bu kombinatsiyalar digraflar yoki
                  trigraflar deb nomlanadi.
                </p>
              </i>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Alphabet;
