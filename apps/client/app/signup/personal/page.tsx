'use client';

import { useForm } from '@near/react-hook-form';
import { CheckBox } from 'ui';

interface PersonalProps {
  personal?: boolean;
}

const Personal = () => {
  const { control } = useForm<PersonalProps>({
    defaultValues: {},
    mode: 'onChange',
  });
  return (
    <div className='mobile:w-[25rem] tablet:w-[550px] desktop:w-[1080px] m-auto mt-[30px]'>
      <section className='layout-max-width'>
        <div className='grid gap-8'>
          <section>
            <div className='flex flex-col'>
              <div className='mb-[150px] font-bold text-4xl flex justify-center'>
                회원 가입 약관 동의
              </div>
              <span className='font-bold text-lg mb-[16px]'>제 1 장 총 칙</span>
              <span className='font-semibold mb-[16px]'>제 1 조(목적)</span>
            </div>
            <ul className='flex flex-col grid gap-1 pl-[20px]'>
              <li className='list-decimal text-sm'>
                본 약관은 니어시스템 (이하 NEAR)이 제공하는 모든 서비스(이하
                서비스)의 이용조건 및 절차와 기타 필요한 사항을 규정함을
                목적으로 합니다.
              </li>
            </ul>
          </section>
          <section>
            <span className=' font-semibold mb-[16px]'>
              제 2 조 (약관의 효력과 변경)
            </span>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                NEAR는 이용자가 본 약관 내용에 동의하는 것을 조건으로 이용자에게
                서비스를 제공할 것이며, 이용자가 본 약관의 내용에 동의하는 경우,
                NEAR의 서비스 제공 행위 및 이용자의 서비스 사용 행위에는 본
                약관이 우선적으로 적용될 것입니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 본 약관을 사전 고지 없이 변경할 수 있으며, 변경된 약관은
                NEAR 내에 공지함으로써 이용자가 직접 확인하도록 할 것입니다.
                이용자가 변경된 약관에 동의하지 아니하는 경우, 이용자는 본인의
                회원등록을 취소(회원탈퇴)할 수 있으며, 계속 사용의 경우는 약관
                변경에 대한 동의로 간주됩니다. 변경된 약관은 공지와 동시에 그
                효력이 발생됩니다.
              </li>
            </ul>
          </section>
          <section>
            <div className=' font-semibold mb-[16px]'>
              제 3 조 (약관외 준칙)
            </div>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                본 약관은 NEAR가 제공하는 서비스에 관한 이용규정 및 별도 약관과
                함께 적용됩니다.
              </li>
              <li className='list-decimal text-sm'>
                본 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법,
                정보통신윤리위원회심의규정, 정보통신 윤리강령, 프로그램 보호법
                및 기타 관련 법령의 규정에 의합니다.
              </li>
            </ul>
          </section>
          <section>
            <div className=' font-semibold mb-[16px]'>
              제 4 조 (용어의 정의)
            </div>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                이용자 : 본 약관에 따라 NEAR가 제공하는 서비스를 받는 자를
                말합니다.
              </li>
              <li className='list-decimal text-sm'>
                가입 : NEAR가 제공하는 신청서 양식에 해당 정보를 기입하고, 본
                약관에 동의하여 서비스 이용계약을 완료시키는 행위를 의미합니다.
              </li>
              <li className='list-decimal text-sm'>
                회원 : 당 사이트에 가입한 개인 또는 단체로서 NEAR의 정보를
                제공받으며, NEAR가 제공하는 서비스를 이용할 수 있는 자를
                말합니다.
              </li>
              <li className='list-decimal text-sm'>
                회원ID : 회원의 식별과 서비스 이용을 위하여 회원이 정하고 등록한
                문자와 숫자의 조합을 의미합니다.
              </li>
              <li className='list-decimal text-sm'>
                비밀번호 : 이용자와 회원ID가 일치하는지를 확인하고 통신상의
                자신의 비밀보호를 위하여 이용자 자신이 선정한 문자와 숫자의
                조합을 의미합니다.
              </li>
              <li className='list-decimal text-sm'>
                탈퇴 : 회원이 이용계약을 종료시키는 행위를 의미합니다.
              </li>
              <li className='list-decimal text-sm'>
                본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도 약관 및
                이용규정에서 정의합니다.
              </li>
            </ul>
          </section>
          <section>
            <div className=' font-semibold mb-[16px]'>
              제 3 조 (약관외 준칙)
            </div>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                본 약관은 NEAR가 제공하는 서비스에 관한 이용규정 및 별도 약관과
                함께 적용됩니다.
              </li>
              <li className='list-decimal text-sm'>
                본 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법,
                정보통신윤리위원회심의규정, 정보통신 윤리강령, 프로그램 보호법
                및 기타 관련 법령의 규정에 의합니다.
              </li>
            </ul>
          </section>
          <section>
            <div className='flex flex-col'>
              <span className='font-bold text-lg mb-[16px]'>
                제 2 장 서비스 제공 및 이용
              </span>
              <span className='font-semibold mb-[16px]'>
                제 6 조 (이용 계약의 성립)
              </span>
            </div>
            <ul className='flex flex-col grid gap-1 pl-[20px]'>
              <li className='list-decimal text-sm'>
                이용 계약은 신청자가 온라인으로 NEAR에서 제공하는 소정의
                가입신청 양식에서 요구하는 사항을 기록하여 가입을 완료하는
                것으로 성립됩니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 다음 각 호에 해당하는 이용계약에 대하여는 가입을 취소할
                수 있습니다.
                <ul className='list-disc pl-[16px] mt-[8px] grid gap-1'>
                  <li>다른 사람 또는 단체의 명의를 사용하여 신청하였을 때</li>
                  <li>
                    이용 계약 신청서의 내용을 허위로 기재하였거나 신청하였을 때
                  </li>
                  <li>
                    사회의 안녕 질서 혹은 미풍양속을 저해할 목적으로 신청하였을
                    때
                  </li>
                  <li>
                    다른 사람의 NEAR 이용을 방해하거나 그 정보를 도용하는 등의
                    행위를 하였을 때
                  </li>
                  <li>
                    NEAR를 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우
                  </li>
                  <li>기타 NEAR가 정한 이용신청요건이 미비되었을 때</li>
                  <li>36개월 이상 NEAR에 로그인하지 않은 경우</li>
                </ul>
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 다음 각 항에 해당하는 경우 그 사유가 해소될 때까지
                이용계약 성립을 유보할 수 있습니다.
                <ul className='list-disc pl-[16px] mt-[8px] grid gap-1'>
                  <li>서비스 관련 제반 용량이 부족한 경우</li>
                  <li>기술상 장애 사유가 있는 경우</li>
                </ul>
              </li>
              <li className='list-decimal text-sm'>
                당 사이트가 제공하는 서비스는 변경될 수 있으며, 변경 사항은
                사이트 내 공지사항을 통해서 이용자에게 알릴 수 있습니다.
              </li>
            </ul>
          </section>
          <section>
            <div className=' font-semibold mb-[16px]'>
              제 7 조 (회원정보 사용에 대한 동의)
            </div>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                회원의 개인정보에 대해서는 NEAR의 개인정보 보호정책이
                적용됩니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR의 회원 정보는 다음과 같이 수집, 사용, 관리, 보호됩니다.
                <ul className='list-disc pl-[16px] mt-[8px] grid gap-1'>
                  <li>
                    개인정보의 수집 : NEAR는 이용자가 가입시 제공하는 정보를
                    통하여 이용자에 관한 정보를 수집합니다.
                  </li>
                  <li>
                    개인정보의 사용 : NEAR는 서비스 제공과 관련해서 수집된
                    회원의 신상정보를 본인의 승낙 없이 제3자에게 누설, 배포하지
                    않습니다.
                    <p className='mt-[5px]'>
                      단, 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가
                      있는 경우, 범죄에 대한 수사상의 목적이 있거나 기타
                      관계법령에서 정한 절차에 따른 요청이 있는 경우, 동의 없이
                      배포할 수 있습니다.
                    </p>
                    <p className='mt-[5px]'>
                      이용자가 NEAR에 개인정보를 스스로 공개한 경우, NEAR에
                      게시된 내용을 통해 제3자가 누설 또는 배포할 수 있습니다.
                      NEAR와 타 행정기관의 사이트 간의 회원정보 통합관리와
                      관련하여 필요한 경우에는 본인의 동의하에 개인정보 등 관련
                      정보를 타 행정기관에 제공할 수 있습니다.
                    </p>
                  </li>
                  <li>
                    개인정보의 관리 : 이용자는 개인정보의 보호 및 관리를 위하여
                    서비스의 개인정보관리에서 수시로 이용자의 개인정보를
                    수정/삭제할 수 있습니다. 수신되는 정보 중 불필요하다고
                    생각되는 부분도 변경/조정할 수 있습니다.
                  </li>
                  <li>
                    개인정보의 보호 : 이용자의 개인정보는 오직 이용자만이
                    열람/수정/삭제할 수 있으며, 이는 전적으로 이용자의 ID와
                    비밀번호에 의해 관리되고 있습니다. 따라서 타인에게 본인의
                    ID와 비밀번호를 알려주어서는 아니되며, 작업 종료시에는
                    반드시 로그아웃해주시기 바랍니다(이는 타인과 컴퓨터를
                    공유하는 인터넷 카페나 도서관 같은 공공장소에서 컴퓨터를
                    사용하는 경우에 이용자의 정보의 보호를 위하여 필요한
                    사항입니다).
                  </li>
                </ul>
              </li>
              <li className='list-decimal text-sm'>
                회원이 NEAR에 본 약관에 따라 이용신청을 하는 것은, NEAR가 제공한
                신청양식에 따라 작성된 회원정보를 수집, 이용하는 것에 동의하는
                것으로 간주됩니다.
              </li>
            </ul>
          </section>
          <section>
            <div className=' font-semibold mb-[16px]'>
              제 8 조 (회원의 정보 보안)
            </div>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                가입 신청자가 NEAR에 가입 절차를 완료하는 순간부터 이용자는
                입력한 정보의 비밀을 유지할 책임이 있으며, 회원의 ID와
                비밀번호를 사용하여 발생하는 모든 결과에 대한 책임은
                회원본인에게 있습니다.
              </li>
              <li className='list-decimal text-sm'>
                ID와 비밀번호에 관한 모든 관리의 책임은 회원에게 있으며, 회원의
                ID나 비밀번호가 부정하게 사용되었다는 사실을 발견한 경우에는
                즉시 NEAR에 신고하여야 합니다. 신고를 하지 않음으로 인한 모든
                책임은 회원 본인에게 있습니다.
              </li>
              <li className='list-decimal text-sm'>
                이용자는 NEAR의 사용 종료시마다 정확히 접속을 종료하도록 해야
                하며, 정확히 종료하지 아니함으로써 제3자가 이용자에 관한 정보를
                이용하게 되는 등의 결과로 인해 발생하는 손해 및 손실에 대하여
                NEAR는 책임을 부담하지 아니합니다.
              </li>
            </ul>
          </section>
          <section>
            <div className=' font-semibold mb-[16px]'>
              제 9 조 (서비스 이용시간)
            </div>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                서비스 이용시간은 NEAR의 업무상 또는 기술상 특별한 지장이 없는
                한 연중무휴, 1일 24시간을 원칙으로 합니다.
              </li>
              <li className='list-decimal text-sm'>
                제1항의 이용시간은 정기점검 등의 필요로 인하여 NEAR가 정한 날
                또는 시간은 예외로 합니다.
              </li>
            </ul>
          </section>
          <section>
            <div className=' font-semibold mb-[16px]'>
              제 10 조 (서비스의 중지 및 정보의 저장과 사용)
            </div>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                이용자는 NEAR에 저장된 내용 또는 전송 메시지 등이 국가의
                비상사태, 정전, NEAR의 관리 범위 외의 서비스 설비 장애 및 기타
                불가항력에 의하여 보관되지 못하였거나 삭제된 경우, 전송되지 못한
                경우 및 기타 통신 데이터의 손실이 있을 경우에 NEAR는 관련 책임을
                부담하지 아니합니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR가 정상적인 서비스 제공의 어려움으로 인하여 일시적으로
                서비스를 중지하여야 할 경우에는 서비스 중지 1주일 전의 고지 후
                서비스를 중지할 수 있으며, 이 기간 동안 이용자가 고지내용을
                인지하지 못한 데 대하여 NEAR는 책임을 부담하지 아니합니다.
                국가의 비상사태, 정전, 당 사이트의 관리범위 외 서비스 설비장애
                및 기타 불가항력의 경우 위 사전 고지기간은 감축되거나 생략될 수
                있습니다. 또한 위 서비스 중지에 의하여 NEAR에 보관된 내용 및
                전송 메시지 등의 내용이 보관되지 못하였거나 삭제된 경우,
                전송되지 못한 경우 및 기타 통신 데이터의 손실이 있을 경우에
                대하여도 NEAR는 책임을 부담하지 아니합니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR의 사정으로 서비스를 영구적으로 중단하여야 할 경우 제2항에
                의거합니다. 다만, 이 경우 사전 고지기간은 1개월로 합니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 사전 고지 후 서비스를 일시적으로 수정, 변경 및 중단할 수
                있으며, 이에 대하여 이용자 또는 제3자에게 어떠한 책임도 부담하지
                아니합니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 이용자가 본 약관의 내용에 위배되는 행동을 한 경우, 사전
                고지 없이 서비스 사용을 중지시킬 수 있습니다.
              </li>
            </ul>
          </section>
          <section>
            <div className=' font-semibold mb-[16px]'>
              제 11 조 (서비스의 변경 및 해지)
            </div>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                NEAR는 이용자가 서비스를 이용하여 기대하는 손익이나 서비스를
                통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않으며,
                이용자가 NEAR에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등
                내용에 관하여는 책임을 지지 않습니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 이용자가 서비스를 이용하여, 고의 또는 과실로 타
                이용자에게 손해를 입힌 경우에 대하여 책임을 부담하지 아니합니다.
              </li>
            </ul>
          </section>
          <section>
            <div className=' font-semibold mb-[16px]'>
              제 12 조 (정보 제공 및 홍보물 게재)
            </div>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                NEAR는 서비스를 운영함에 있어서 각종 정보를 게재하는 방법 등으로
                회원에게 제공할 수 있습니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 서비스에 적절하다고 판단되거나 활용 가능성 있는 홍보물을
                게재할 수 있습니다.
              </li>
            </ul>
          </section>
          <section>
            <div className=' font-semibold mb-[16px]'>
              제 13 조 (당 사이트에 제출된 게시물의 저작권)
            </div>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                이용자가 게시한 게시물의 내용에 대한 권리는 이용자에게 있습니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 게시된 내용을 사전 통지 없이 이동 할 수 있는 권리를
                보유하며, 다음의 경우 사전 통지 없이 삭제할 수 있습니다.
                <ul className='list-disc pl-[16px] mt-[8px] grid gap-1'>
                  <li>
                    본 서비스 약관에 위배되거나 상용 또는 불법, 음란, 저속하다고
                    판단되는 게시물을 게시한 경우
                  </li>
                  <li>
                    다른 회원 또는 제3자를 비방하거나 중상모략으로 명예를
                    손상시키는 내용인 경우
                  </li>
                  <li>공공질서 및 미풍양속에 위반되는 내용인 경우</li>
                  <li>범죄적 행위에 결부된다고 인정되는 내용일 경우</li>
                  <li>제3자의 저작권 등 기타 권리를 침해하는 내용인 경우</li>
                  <li>기타 관계 법령에 위배되는 경우</li>
                </ul>
              </li>
              <li className='list-decimal text-sm'>
                이용자의 게시물이 타인의 저작권을 침해함으로써 발생하는 민,
                형사상의 책임은 전적으로 이용자가 부담하여야 합니다.
              </li>
            </ul>
          </section>
          <section>
            <div className=' font-semibold mb-[16px]'>
              제 14 조 (사용자의 행동규범 및 서비스 이용제한)
            </div>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                이용자가 제공하는 정보의 내용이 허위인 것으로 판명되거나,
                그러하다고 의심할 만한 합리적인 사유가 발생할 경우 NEAR는
                이용자의 본 서비스 사용을 일부 또는 전부 중지할 수 있으며, 이로
                인해 발생하는 불이익에 대해 책임을 부담하지 아니합니다.
              </li>
              <li className='list-decimal text-sm'>
                이용자가 NEAR를 통하여 게시, 전송, 입수하였거나 전자메일 기타
                다른 수단에 의하여 게시, 전송 또는 입수한 모든 형태의 정보에
                대하여는 이용자가 모든 책임을 부담하며 당 사이트는 어떠한 책임도
                부담하지 아니합니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 NEAR가 제공한 서비스가 아닌 가입자 또는 기타 유관기관이
                제공하는 서비스의 내용상의 정확성, 완전성 및 품질에 대하여
                보장하지 않습니다. 따라서 NEAR는 이용자가 위 내용을 이용함으로
                인하여 입게 된 모든 종류의 손실이나 손해에 대하여 책임을
                부담하지 아니합니다.
              </li>
              <li className='list-decimal text-sm'>
                이용자는 본 서비스를 통하여 다음과 같은 행위를 금지합니다.
                <ul className='list-disc pl-[16px] mt-[8px] grid gap-1'>
                  <li>타인의 아이디(ID)와 비밀번호를 도용하는 행위</li>
                  <li>
                    저속, 음란, 모욕적, 위협적이거나 타인의 프라이버시를 침해할
                    수 있는 내용을 전송, 게시, 게재, 전자메일 또는 기타의
                    방법으로 전송하는 행위
                  </li>
                  <li>서비스를 통하여 전송된 내용의 출처를 위장하는 행위</li>
                  <li>
                    법률, 계약에 의하여 이용할 수 없는 내용을 게시, 게재,
                    전자메일 또는 기타의 방법으로 전송하는 행위
                  </li>
                  <li>
                    타인의 특허, 상표, 영업비밀, 저작권, 기타 지적재산권을
                    침해하는 내용을 게시, 게재, 전자메일 또는 기타의 방법으로
                    전송하는 행위
                  </li>
                  <li>
                    NEAR의 승인을 받지 아니한 광고, 판촉물, 정크메일, 스팸,
                    행운의 편지, 피라미드 조직 기타 다른 형태의 권유를 게시,
                    게재, 전자메일 또는 기타의 방법으로 전송하는 행위
                  </li>
                  <li>다른 사용자의 개인정보를 수집 또는 저장하는 행위</li>
                </ul>
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 회원이 본 약관을 위배했다고 판단되면 NEAR와 관련한 모든
                이용정보를 이용자의 동의 없이 삭제할 수 있습니다.
              </li>
            </ul>
          </section>
          <section>
            <div className='flex flex-col'>
              <span className='font-bold text-lg mb-[16px]'>
                제 3 장 의무 및 책임
              </span>
              <span className='font-semibold mb-[16px]'>
                제 15 조 (당 사이트의 의무)
              </span>
            </div>
            <ul className='flex flex-col grid gap-1 pl-[20px]'>
              <li className='list-decimal text-sm'>
                NEAR는 법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지
                않으며, 계속적, 안정적으로 서비스를 제공하기 위해 노력할 의무가
                있습니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 이용자의 개인 신상 정보를 본인의 승낙 없이 타인에게 누설,
                배포하지 않습니다. 다만, 전기통신관련법령 등 관계 법령에 의하여
                관계 국가기관 등의 요구가 있는 경우에는 그러하지 않으며, NEAR와
                타 행정기관의 사이트 간의 회원정보 통합관리와 관련하여 필요한
                경우에는 개인정보 등 관련 정보를 타 행정기관에 제공할 수
                있습니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 이용자가 안전하게 시스템을 이용할 수 있도록 이용자의
                개인정보보호를 위한 보안시스템을 갖추어야 합니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을
                지지 않습니다.
              </li>
            </ul>
          </section>
          <section>
            <div className=' font-semibold mb-[16px]'>
              제 12 조 (정보 제공 및 홍보물 게재)
            </div>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                회원 가입 시에 요구되는 정보는 정확하게 기입하여야 하며, 기입된
                정보가 정확하게 유지·갱신되어야 합니다. 또한, 회원은 자신의 ID
                및 비밀번호를 제3자에게 이용하게 해서는 안됩니다.
              </li>
              <li className='list-decimal text-sm'>
                회원은 NEAR의 사전 승낙 없이 서비스를 이용하여 어떠한 영리행위도
                할 수 없습니다.
              </li>
              <li className='list-decimal text-sm'>
                회원은 NEAR를 이용하여 얻은 정보를 NEAR의 사전승낙 없이 복사,
                복제, 변경, 번역, 출판·방송 기타의 방법으로 사용하거나 이를
                타인에게 제공할 수 없습니다.
              </li>
              <li className='list-decimal text-sm'>
                회원은 NEAR 이용과 관련하여 다음 각 호의 행위를 하여서는
                안됩니다.
                <ul className='list-disc pl-[16px] mt-[8px] grid gap-1'>
                  <li>다른 회원의 ID를 부정 사용하는 행위</li>
                  <li>
                    범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위
                  </li>
                  <li>선량한 풍속, 기타 사회질서를 해하는 행위</li>
                  <li>타인의 명예를 훼손하거나 모욕하는 행위</li>
                  <li>타인의 지적재산권 등의 권리를 침해하는 행위</li>
                  <li>해킹행위 또는 컴퓨터바이러스의 유포행위</li>
                  <li>
                    타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로
                    전송하는 행위
                  </li>
                  <li>
                    타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로
                    전송하는 행위
                  </li>
                  <li>
                    서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있는 일체의
                    행위
                  </li>
                  <li>NEAR에 게시된 정보의 변경</li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <div className='flex flex-col'>
              <span className='font-bold text-lg mb-[16px]'>제 4 장 기 타</span>
              <span className='font-semibold mb-[16px]'>
                제 17 조 (NEAR의 소유권)
              </span>
            </div>
            <ul className='flex flex-col grid gap-1 pl-[20px]'>
              <li className='list-decimal text-sm'>
                NEAR가 제공하는 서비스, 그에 필요한 소프트웨어, 이미지, 마크,
                로고, 디자인, 서비스명칭, 정보 및 상표 등과 관련된 지적재산권 및
                기타 권리는 니어시스템에 소유권이 있습니다.
              </li>
              <li className='list-decimal text-sm'>
                이용자는 NEAR가 명시적으로 승인한 경우를 제외하고는 제17조 1항에
                대한 소유권의 전부 또는 일부의 수정, 대여, 대출, 판매, 배포,
                제작, 양도, 저작권 기한연장, 담보권 설정 행위, 상업적 이용
                행위를 할 수 없으며, 제3자로 하여금 이와 같은 행위를 하도록
                허락할 수 없습니다.
              </li>
            </ul>
          </section>
          <section>
            <span className=' font-semibold mb-[16px]'>
              제 18 조 (양도금지)
            </span>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                회원이 서비스의 이용권한, 기타 이용계약상 지위를 타인에게 양도,
                증여할 수 없으며, 이를 담보로 제공할 수 없습니다.
              </li>
            </ul>
          </section>
          <section>
            <span className=' font-semibold mb-[16px]'>
              제 19 조 (손해배상)
            </span>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                NEAR는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가
                발생하더라도 NEAR가 아래 각항의 경우를 제외하고는 이에 대한
                어떠한 책임도 부담하지 않습니다.
                <ul className='list-disc pl-[16px] mt-[8px] grid gap-1'>
                  <li>NEAR에서 고의로 행한 범죄행위</li>
                  <li>
                    NEAR에서 제공하는 무료 서비스를 원천제공자의 동의 없이
                    유료서비스로 전환한 경우
                  </li>
                  <li>
                    NEAR에서 부당이득을 취할 목적으로 제15조(당 사이트의
                    의무)조항을 고의적으로 위반한 경우
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <span className=' font-semibold mb-[16px]'>
              제 20 조 (면책조항)
            </span>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                NEAR는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를
                제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 서비스에 표출된 어떠한 의견이나 정보에 대해 확신이나
                대표할 의무가 없으며 회원이나 제3자에 의해 표출된 의견을
                승인하거나 반대하거나 수정하지 않습니다. NEAR는 어떠한 경우라도
                회원이 서비스에 담긴 정보에 의존해 얻은 이득이나 입은 손해에
                대해 책임이 없습니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 회원간 또는 회원과 제3자간에 서비스를 매개로 하여
                물품거래 혹은 금전적 거래 등과 관련하여 어떠한 책임도 부담하지
                아니하고, 회원이 서비스의 이용과 관련하여 기대하는 이익에 관하여
                책임을 부담하지 않습니다.
              </li>
              <li className='list-decimal text-sm'>
                NEAR는 무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한
                규정이 없는 한 책임을 지지 않습니다.
              </li>
            </ul>
          </section>
          <section>
            <span className=' font-semibold mb-[16px]'>
              제 21 조 (재판관할)
            </span>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                본 서비스 이용과 관련하여 발생한 분쟁에 대해 소송이 제기될 경우
                민사소송법상의 관할을 가지는 대한민국의 법원에 제기합니다.
              </li>
            </ul>
          </section>
          <section>
            <span className=' font-semibold mb-[16px]'>부 칙</span>
            <ul className='flex flex-col grid gap-2 pl-[20px]'>
              <li className='list-decimal text-sm'>
                (시행일) 본 약관은 2008년 10월 1일(서비스 개시일로 수정필요)부터
                시행됩니다.
              </li>
            </ul>
          </section>
        </div>
        <div className=' mt-[200px]'>
          <CheckBox
            name={'personal'}
            control={control}
            labelType='singletext'
            label='위 약관에 동의합니다'
          />
        </div>
      </section>
    </div>
  );
};

export default Personal;
