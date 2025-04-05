import './App.css';

import GenIcon from './assets/images/gen.png';
import PersonIcon from './assets/images/person.png';
import FaceIcon from './assets/images/face.png';
import HairIcon from './assets/images/hair.png';
import ClothesIcon from './assets/images/clothes.png';
import MaleIcon from './assets/images/male.png';
import FemaleIcon from './assets/images/female.png';
import { useState } from 'react';

function App() {
  const [gender, setGender] = useState('male');
  const genders = [
    { value: "male", icon: MaleIcon, label: "Мужской", position: { left: '7%' } },
    { value: "female", icon: FemaleIcon, label: "Женский", position: { right: '7%' } }
  ];
  
  const [page, setPage] = useState(0);
  const faceSliders = [
    "Ширина носа", "Высота носа", "Длина кончика носа", "Глубина моста носа",
    "Высота кончика носа", "Поломаность носа", "Высота бровей", "Глубина бровей",
    "Высота скул", "Ширина скул", "Глубина щеки", "Размер глаз", "Толщина губ",
    "Ширина челюсти", "Форма челюсти", "Высота подбородка", "Глубина подбородка",
    "Ширина подбородка", "Отступ подбородка", "Шея"
  ];
  
  const [sliderValues, setSliderValues] = useState(faceSliders.map(() => 0.5));
  
  const eyeColors = [
    '#234329', '#0e4800', '#485781', '#2f5273', '#733806', '#462710',
    '#482e06', '#666366', '#807d7d'
  ];
  
  const [selectedEyeColor, setSelectedEyeColor] = useState('#234329');
  
  return (
    <div className="main">
      <div className="main-overlay">
        <div className="main-title">Создание персонажа</div>
        <div className="main-content">
          <div className="main-content-title">Характеристики персонажа</div>
          <div className="main-content-left-box">
            <div className="box-section-title">
              <div className="box-title">Выберите раздел</div>
            </div>
            <div className="box-section" onClick={() => setPage(0)}>
              <img src={PersonIcon} alt="Персонаж" className="section-image" />
              <div className="box-item-title">Персонаж</div>
            </div>
            <div className="box-section" onClick={() => setPage(1)}>
              <img src={GenIcon} alt="Наследственность" className="section-image" style={{height: '2.5vh'}}/>
              <div className="box-item-title">Наследственность</div>
            </div>
            <div className="box-section" onClick={() => setPage(2)}>
            <img src={FaceIcon} alt="Форма лица" className="section-image" />
              <div className="box-item-title">Форма лица</div>
            </div>
            <div className="box-section">
              <img src={HairIcon} alt="Волосы" className="section-image" />
              <div className="box-item-title">Волосы</div>
            </div>
            <div className="box-section">
              <img src={ClothesIcon} alt="Одежда" className="section-image" />
              <div className="box-item-title">Одежда</div>
            </div>
          </div>
          <div className="main-content-right-box">
          {page === 0 ? (
            <div className="right-box-page">
              <div className="right-box-item-title" style={{ top: '4%', left: '7%' }}>Введите имя</div>
              <input className="right-box-input" placeholder="Имя" style={{ top: '11%', left: '7%' }} />

              <div className="right-box-item-title" style={{ top: '24%', left: '7%' }}>Введите фамилию</div>
              <input className="right-box-input" placeholder="Фамилия" style={{ top: '31%', left: '7%' }} />

              <div className="right-box-item-title" style={{ top: '44%', left: '7%' }}>Введите возраст</div>
              <input className="right-box-input" placeholder="Возраст" style={{ top: '51%', left: '7%' }} />

              <div className="right-box-item-title" style={{ top: '64%', left: '7%' }}>Введите пол</div>
              {genders.map(({ value, icon, label, position }) => (
              <div
                key={value}
                className={
                  gender === value
                    ? 'right-box-gender-input-selected'
                    : 'right-box-gender-input-not-selected'
                }
                style={{ top: '71%', ...position }}
                onClick={() => setGender(value)}
              >
                <img src={icon} alt={label} className="gender-select-icon" />
              </div>
            ))}
            </div>
          ) : null}

{page === 1 ? (
  <div className="right-box-page">
    <div className="parents-images-box" style={{ top: '4%' }}>
      <div
        className="parents-image-box"
        style={{
          backgroundImage: `url('https://cdn-ra3.ragemp.su/cloud/img/parents/4.png')`,
        }}
      />
      <div
        className="parents-image-box"
        style={{
          backgroundImage: `url('https://cdn-ra3.ragemp.su/cloud/img/parents/4.png')`,
        }}
      />
    </div>

    <div className="right-box-item-title" style={{ top: '32%', left: '7%' }}>
      Родитель 1
    </div>
    <div className="parent-switcher-box" style={{ top: '39%', left: '7%' }}>
      <div className="parent-switcher-button-left">
        <div className="switcher-left-arrow-image" />
      </div>
      <div className="parent-switcher-text">Эндрю</div>
      <div className="parent-switcher-button-right">
        <div className="switcher-right-arrow-image" />
      </div>
    </div>

    <div className="right-box-item-title" style={{ top: '50%', left: '7%' }}>
      Родитель 2
    </div>
    <div className="parent-switcher-box" style={{ top: '57%', left: '7%' }}>
      <div className="parent-switcher-button-left">
        <div className="switcher-left-arrow-image" />
      </div>
      <div className="parent-switcher-text">Алекс</div>
      <div className="parent-switcher-button-right">
        <div className="switcher-right-arrow-image" />
      </div>
    </div>

    <div className="right-box-item-title" style={{ top: '68%', left: '7%' }}>
      Схожесть
    </div>
    <input
      className="right-box-input-range"
      min="0.0"
      max="1.0"
      step="0.1"
      type="range"
      defaultValue="0.5"
      style={{ top: '75%', left: '7%' }}
    />

        <div className="right-box-item-title" style={{ top: '82%', left: '7%' }}>
          Цвет кожи
        </div>
        <input
          className="right-box-input-range"
          min="0.0"
          max="1.0"
          step="0.1"
          type="range"
          defaultValue="0.5"
          style={{ top: '89%', left: '7%' }}
        />
      </div>
    ) : null}
    {page === 2 ? (
  <>
    <div className='box-face-settings'>
      {faceSliders.map((label, index) => (
        <div key={index} className='right-box-face-settings-item'>
          <div className='right-box-item-title-face-settings'>
            {label}: {sliderValues[index].toFixed(1)}
          </div>
          <input
            className='right-box-face-settings-input-range'
            type='range'
            min='0.0'
            max='1.0'
            step='0.1'
            value={sliderValues[index]}
            onChange={(e) => {
              const newValues = [...sliderValues];
              newValues[index] = parseFloat(e.target.value);
              setSliderValues(newValues);
            }}
          />
        </div>
      ))}
    </div>

    <div className='box-eyes-color-settings'>
      <div className='right-box-item-title-eyes-color-settings' style={{ top: '7%' }}>
        Цвет глаз
      </div>
      <div className='box-eyes-color-items'>
        {eyeColors.map((color, index) => (
          <div
            key={index}
            className='box-eyes-color-item'
            style={{
              background: color,
              border: selectedEyeColor === color ? '2px solid #fff' : 'none',
            }}
            onClick={() => setSelectedEyeColor(color)}
          />
        ))}
      </div>
    </div>
  </>
) : null}



          </div>
          <div className="button-handler">
            <button className="create-button">Создать</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;