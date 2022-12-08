import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';

import 'animate.css';

function App() {
  const apples = [3,3,3,3,3,2,2,2,1,1]
  return (
    <div>
      <div className='header-container'>
        <div>목록으로</div>
        <div>김학쫑 생기부 진단 - 1학년</div>
        <div>임시 저장</div>
      </div>
      <div className='content-wrapper'>
        <div className='content-container'>
          <div className='content-title'>생기부 진단 결과</div>
          <div className='content-subtitle'>AI를 통해 분석한 생기부 진단 결과입니다.</div>
          <div className='tree-container'>
            <div className={classNames('apple one', { red: apples[0] === 3 }, { half: apples[0] === 2 }, { green: apples[0] === 1 })}>
            </div>
            <div className={classNames('apple two', { red: apples[1] === 3 }, { half: apples[1] === 2 }, { green: apples[1] === 1 })}>
            </div>
            <div className={classNames('apple three', { red: apples[2] === 3 }, { half: apples[2] === 2 }, { green: apples[2] === 1 })}>
            </div>
            <div className={classNames('apple four', { red: apples[3] === 3 }, { half: apples[3] === 2 }, { green: apples[3] === 1 })}>
            </div>
            <div className={classNames('apple five', { red: apples[4] === 3 }, { half: apples[4] === 2 }, { green: apples[4] === 1 })}>
            </div>
            <div className={classNames('apple six', { red: apples[5] === 3 }, { half: apples[5] === 2 }, { green: apples[5] === 1 })}>
            </div>
            <div className={classNames('apple seven', { red: apples[6] === 3 }, { half: apples[6] === 2 }, { green: apples[6] === 1 })}>
            </div>
            <div className={classNames('apple eight', { red: apples[7] === 3 }, { half: apples[7] === 2 }, { green: apples[7] === 1 })}>
            </div>
            <div className={classNames('apple nine', { red: apples[8] === 3 }, { half: apples[8] === 2 }, { green: apples[8] === 1 })}>
            </div>
            <div className={classNames('apple ten', { red: apples[9] === 3 }, { half: apples[9] === 2 }, { green: apples[9] === 1 })}>
            </div>
          </div>
          <div className='ev-container'>
            <div className='ev-title'>상위 1%의 세특! 이대로라면 걱정 없어요!</div>
            <div className='ev-content'>희망 진로에 대한 탐구 내역을 확인할 수 있으나, 구체적인 과정 및 결과 기록이 다소 부족합니다. 과정과 결과가 조금 더 꼼꼼히 기록될 수 있도록 선생님께 어필해볼까요?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
