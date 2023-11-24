import CategoryMain from "./Categories/CategoryMain";

function Header() {
  return (
    <div className="dictHeader">
      <div className="dictTitle">Глоссарий</div>
      <div className="textWithIcon">
        <div className="dictDesc">
          <p>
            Добро пожаловать в «Глоссарий Eqvanta». Здесь собраны термины и
            аббревиатуры, принятые в компании. Используй глоссарий в любое время
            — если столкнулся с незнакомыми словами во время обучения или забыл
            значение термина при решении рабочих задач.
          </p>
          <p>
            Если среди слов нет нужного термина или аббревиатуры, ты можешь
            отправить предложение, нажав на кнопку «Добавить слово». Мы
            рассмотрим заявку и сообщим результат.
          </p>
        </div>
        <CategoryMain />
      </div>
    </div>
  );
}

export default Header;
