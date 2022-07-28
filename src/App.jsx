import './App.css'

function App () {
  return (
    <div className='App pt-16 pb-16 mx-5 '>

      {/** container widgets */}
      <div className='box-border m-auto max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-4'>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <img class='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/44.jpg' alt='avatar' />
            <div className='flex-auto'>
              <a href='#' className='no-underline font-bold block'>Yolanda</a>
              <span className='text-slate-600 text-sm'>Web Development</span>
            </div>
          </div>
          <a href='#' className='no-underline inline-block'>
            <svg width='27' height='22' viewBox='0 0 27 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M25.3125 17.75C25.3125 18.1976 25.1347 18.6268 24.8182 18.9432C24.5018 19.2597 24.0726 19.4375 23.625 19.4375H3.375C2.92745 19.4375 2.49822 19.2597 2.18176 18.9432C1.86529 18.6268 1.6875 18.1976 1.6875 17.75V7.625C1.6875 7.17745 1.86529 6.74823 2.18176 6.43176C2.49822 6.11529 2.92745 5.9375 3.375 5.9375H5.35275C6.69471 5.93677 7.98148 5.40324 8.93025 4.45419L10.3309 3.05694C10.6464 2.74127 11.0742 2.56349 11.5206 2.5625H15.4761C15.9236 2.5626 16.3527 2.74045 16.6691 3.05694L18.0664 4.45419C18.5366 4.92452 19.0948 5.2976 19.7092 5.55211C20.3237 5.80662 20.9822 5.93758 21.6472 5.9375H23.625C24.0726 5.9375 24.5018 6.11529 24.8182 6.43176C25.1347 6.74823 25.3125 7.17745 25.3125 7.625V17.75ZM3.375 4.25C2.47989 4.25 1.62145 4.60558 0.988515 5.23851C0.355579 5.87145 0 6.72989 0 7.625V17.75C0 18.6451 0.355579 19.5035 0.988515 20.1365C1.62145 20.7694 2.47989 21.125 3.375 21.125H23.625C24.5201 21.125 25.3785 20.7694 26.0115 20.1365C26.6444 19.5035 27 18.6451 27 17.75V7.625C27 6.72989 26.6444 5.87145 26.0115 5.23851C25.3785 4.60558 24.5201 4.25 23.625 4.25H21.6472C20.7522 4.24981 19.8939 3.8941 19.2611 3.26113L17.8639 1.86387C17.2311 1.2309 16.3728 0.875191 15.4777 0.875H11.5223C10.6272 0.875191 9.76891 1.2309 9.13612 1.86387L7.73887 3.26113C7.10609 3.8941 6.24778 4.24981 5.35275 4.25H3.375Z' fill='black' />
              <path d='M13.5 16.0625C12.3811 16.0625 11.3081 15.618 10.5169 14.8269C9.72572 14.0357 9.28125 12.9626 9.28125 11.8438C9.28125 10.7249 9.72572 9.65181 10.5169 8.86064C11.3081 8.06947 12.3811 7.625 13.5 7.625C14.6189 7.625 15.6919 8.06947 16.4831 8.86064C17.2743 9.65181 17.7188 10.7249 17.7188 11.8438C17.7188 12.9626 17.2743 14.0357 16.4831 14.8269C15.6919 15.618 14.6189 16.0625 13.5 16.0625ZM13.5 17.75C15.0664 17.75 16.5687 17.1277 17.6763 16.0201C18.784 14.9125 19.4062 13.4102 19.4062 11.8438C19.4062 10.2773 18.784 8.77504 17.6763 7.6674C16.5687 6.55976 15.0664 5.9375 13.5 5.9375C11.9336 5.9375 10.4313 6.55976 9.32365 7.6674C8.21601 8.77504 7.59375 10.2773 7.59375 11.8438C7.59375 13.4102 8.21601 14.9125 9.32365 16.0201C10.4313 17.1277 11.9336 17.75 13.5 17.75ZM5.0625 8.46875C5.0625 8.69253 4.9736 8.90714 4.81537 9.06537C4.65714 9.22361 4.44253 9.3125 4.21875 9.3125C3.99497 9.3125 3.78036 9.22361 3.62213 9.06537C3.46389 8.90714 3.375 8.69253 3.375 8.46875C3.375 8.24497 3.46389 8.03036 3.62213 7.87213C3.78036 7.7139 3.99497 7.625 4.21875 7.625C4.44253 7.625 4.65714 7.7139 4.81537 7.87213C4.9736 8.03036 5.0625 8.24497 5.0625 8.46875Z' fill='black' />
            </svg>
          </a>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <img class='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/80.jpg' alt='avatar' />
            <div className='flex-auto'>
              <a href='#' className='no-underline font-bold block'>Marina Flick</a>
              <span className='text-slate-600 text-sm'>Web Development</span>
            </div>
          </div>
          <button className='no-underline inline-block bg-slate-100 rounded-full p-3 hover:bg-slate-200 transition-all'>
            <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' fill='currentColor' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <a href='#'>
              <img class='flex-none w-14 h-14 rounded-full object-cover ring-4 ring-pink-500 border-2 border-white' src='https://randomuser.me/api/portraits/women/80.jpg' alt='avatar' />
            </a>
            <div className='flex-auto'>
              <a href='#' className='no-underline font-bold block'>Jenny Wilson</a>
            </div>
          </div>
        </div>

        {/** widget */}
        <a href='#' className='break-inside overflow-hidden flex bg-[#A649EE] rounded-2xl mb-4'>
          <div className='flex-1 items-center relative'>
            <div className='absolute -right-1 -top-4'>
              <img class='flex-none w-28 h-28 rounded-2xl object-cover rotate-12' src='https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='avatar' />
            </div>
            <div className='mr-auto px-8 py-4'>
              <h5 className='font-medium text-lg text-white'>Dance</h5>
              <h3 className='font-bold text-xl text-white'>Electrónic</h3>
            </div>
          </div>
        </a>

        {/** widget */}
        <div className='break-inside flex justify-between flex-col bg-white rounded-xl p-4 mb-4'>
          <div className='flex justify-between items-start mb-5'>
            <h5 className='font-medium text-xl'>New task completed successfully</h5>
            <button className='no-underline inline-block hover:bg-slate-100 transition-all rounded-full p-2'>
              <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' fill='currentColor' />
              </svg>
            </button>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
              <img class='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/60.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline font-bold block'>Lucianna</a>
              </div>
            </div>
            <div className='flex items-center space-x-2 text-gray-600'>
              <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 13H11L7 10.7L7.8 9.4L11.1 11.3V7H12.6V13Z' fill='currentColor' />
              </svg>
              <span className='font-medium'>3 min</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex justify-between flex-col bg-white rounded-xl p-4 mb-4 space-y-5'>
          <div className='flex justify-between items-start space-x-3'>
            <svg width='34' height='34' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4' fill='currentColor' />
            </svg>
            <h5 className='font-medium text-lg'>Improve large organization onboarding</h5>
          </div>
          <div className='relative w-full h-2 bg-slate-100 rounded-md overflow-hidden'>
            <div className='absolute left-0 w-1/3 h-full bg-[#D903EC]' />
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
              <img class='flex-none w-9 h-9 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/46.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='no-underline font-bold block'>Veronica</a>
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <span className='font-bold'>34.5 K</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex justify-between flex-col bg-white p-4 mb-4 space-y-5 border-l-[5px] border-blue-600'>
          <div className='flex justify-between items-start space-x-3'>
            <svg width='34' height='34' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4' fill='currentColor' />
            </svg>
            <h5 className='font-medium text-lg'>Improve large organization onboarding</h5>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex space-x-2 items-center'>
              <div className='flex items-center space-x-2 bg-slate-200 py-1 px-2 rounded-md'>
                <svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z' fill='currentColor' />
                </svg>
                <span>24</span>
              </div>
              <div className='flex items-center space-x-2 bg-slate-200 py-1 px-2 rounded-md'>
                <svg width='16' height='16' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M3 8.25H1.5V10.5H3V8.25ZM6.75 5.25H5.25V10.5H6.75V5.25ZM10.5 1.5V10.5H9V1.5H10.5ZM9 0.75C8.80109 0.75 8.61032 0.829018 8.46967 0.96967C8.32902 1.11032 8.25 1.30109 8.25 1.5V10.5C8.25 10.6989 8.32902 10.8897 8.46967 11.0303C8.61032 11.171 8.80109 11.25 9 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V1.5C11.25 1.30109 11.171 1.11032 11.0303 0.96967C10.8897 0.829018 10.6989 0.75 10.5 0.75H9ZM4.5 5.25C4.5 5.05109 4.57902 4.86032 4.71967 4.71967C4.86032 4.57902 5.05109 4.5 5.25 4.5H6.75C6.94891 4.5 7.13968 4.57902 7.28033 4.71967C7.42098 4.86032 7.5 5.05109 7.5 5.25V10.5C7.5 10.6989 7.42098 10.8897 7.28033 11.0303C7.13968 11.171 6.94891 11.25 6.75 11.25H5.25C5.05109 11.25 4.86032 11.171 4.71967 11.0303C4.57902 10.8897 4.5 10.6989 4.5 10.5V5.25ZM0.75 8.25C0.75 8.05109 0.829018 7.86032 0.96967 7.71967C1.11032 7.57902 1.30109 7.5 1.5 7.5H3C3.19891 7.5 3.38968 7.57902 3.53033 7.71967C3.67098 7.86032 3.75 8.05109 3.75 8.25V10.5C3.75 10.6989 3.67098 10.8897 3.53033 11.0303C3.38968 11.171 3.19891 11.25 3 11.25H1.5C1.30109 11.25 1.11032 11.171 0.96967 11.0303C0.829018 10.8897 0.75 10.6989 0.75 10.5V8.25Z' fill='black' />
                </svg>
                <span>6</span>
              </div>
              <div className='flex items-center space-x-2 bg-slate-200 py-1 px-2 rounded-md'>
                <svg width='16' height='16' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M4.74795 16.875C4.80068 16.875 4.85342 16.8697 4.90615 16.8618L9.34111 16.084C9.39385 16.0734 9.44395 16.0497 9.48086 16.0102L20.6579 4.83311C20.6824 4.80871 20.7017 4.77974 20.715 4.74784C20.7282 4.71594 20.735 4.68175 20.735 4.64722C20.735 4.61268 20.7282 4.57849 20.715 4.54659C20.7017 4.5147 20.6824 4.48572 20.6579 4.46133L16.2757 0.0764649C16.2256 0.0263672 16.1597 0 16.0885 0C16.0173 0 15.9514 0.0263672 15.9013 0.0764649L4.72422 11.2535C4.68467 11.2931 4.66094 11.3405 4.65039 11.3933L3.87256 15.8282C3.84691 15.9695 3.85607 16.1148 3.89926 16.2518C3.94245 16.3887 4.01835 16.513 4.12041 16.614C4.29443 16.7827 4.51328 16.875 4.74795 16.875ZM6.5251 12.2766L16.0885 2.71582L18.0212 4.64853L8.45781 14.2093L6.11377 14.6232L6.5251 12.2766ZM21.1562 19.0898H1.75C1.2833 19.0898 0.90625 19.4669 0.90625 19.9336V20.8828C0.90625 20.9988 1.00117 21.0938 1.11719 21.0938H21.7891C21.9051 21.0938 22 20.9988 22 20.8828V19.9336C22 19.4669 21.6229 19.0898 21.1562 19.0898Z' fill='black' />
                </svg>
                <span>12</span>
              </div>
              <div className='flex items-center space-x-2 bg-slate-200 py-1 px-2 rounded-md'>
                <svg width='18' height='17' viewBox='0 0 12 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M6.03101 3.16912C6.17397 3.02653 6.34361 2.91351 6.53024 2.83653C6.71687 2.75955 6.91683 2.72011 7.1187 2.72046C7.32057 2.72081 7.5204 2.76095 7.70676 2.83859C7.89312 2.91622 8.06236 3.02982 8.20482 3.17291C8.80397 3.77231 8.80871 4.74634 8.20862 5.34764C8.06566 5.49023 7.89602 5.60324 7.70939 5.68022C7.52276 5.75721 7.32279 5.79665 7.12092 5.7963C6.91905 5.79594 6.71923 5.7558 6.53287 5.67817C6.34651 5.60054 6.17726 5.48693 6.0348 5.34384C5.89178 5.20132 5.77822 5.03201 5.70062 4.84557C5.62302 4.65913 5.58289 4.45922 5.58254 4.25727C5.58219 4.05531 5.62161 3.85527 5.69856 3.66856C5.77551 3.48185 5.88848 3.31214 6.03101 3.16912ZM7.53362 3.8425C7.4236 3.73173 7.27412 3.66921 7.11803 3.66868C6.96195 3.66814 6.81204 3.72964 6.70126 3.83965C6.59142 3.9506 6.53012 4.10064 6.53083 4.25679C6.53154 4.41294 6.59421 4.56242 6.70505 4.67236C6.81495 4.78325 6.96436 4.84595 7.12045 4.84666C7.27654 4.84737 7.42652 4.78604 7.53742 4.67616C7.64726 4.56521 7.70856 4.41517 7.70785 4.25902C7.70714 4.10286 7.64447 3.95339 7.53362 3.84344V3.8425ZM11.1636 1.41834C11.0744 1.13506 10.9182 0.877483 10.7083 0.667468C10.4983 0.457452 10.2409 0.301194 9.95771 0.211951C9.15736 -0.0401826 8.30323 -0.0679289 7.48821 0.13173C6.6732 0.331388 5.92852 0.750806 5.33517 1.34436L4.73886 1.94187C4.32475 1.76355 3.86669 1.7136 3.4239 1.79847C2.98111 1.88335 2.57395 2.09915 2.25505 2.41797L1.50991 3.16248C1.46576 3.20653 1.43074 3.25886 1.40684 3.31647C1.38295 3.37408 1.37065 3.43585 1.37065 3.49822C1.37065 3.5606 1.38295 3.62236 1.40684 3.67997C1.43074 3.73758 1.46576 3.78991 1.50991 3.83396L2.31572 4.64012C2.25272 4.88038 2.25371 5.13296 2.31857 5.37273C2.38344 5.6125 2.50992 5.8311 2.68545 6.00679L2.84377 6.16517L2.11095 6.60334C2.04902 6.64035 1.99635 6.691 1.95695 6.75145C1.91754 6.8119 1.89245 6.88055 1.88359 6.95217C1.87472 7.02379 1.8823 7.09649 1.90577 7.16473C1.92923 7.23297 1.96796 7.29495 2.01899 7.34595L4.03164 9.35945C4.08262 9.4105 4.14458 9.44924 4.21279 9.47272C4.281 9.49619 4.35367 9.50378 4.42526 9.49491C4.49685 9.48604 4.56547 9.46094 4.62589 9.42152C4.68632 9.3821 4.73695 9.32941 4.77394 9.26745L5.21192 8.53527L5.37024 8.69271C5.73997 9.06354 6.26423 9.18683 6.73729 9.06259L7.5431 9.86875C7.63199 9.95765 7.75254 10.0076 7.87823 10.0076C8.00392 10.0076 8.12447 9.95765 8.21336 9.86875L8.95755 9.12424C9.2764 8.80531 9.49229 8.39803 9.5773 7.95505C9.66231 7.51207 9.61253 7.05376 9.43441 6.63938L10.0307 6.04188C10.624 5.44847 11.0433 4.70368 11.2431 3.88851C11.4428 3.07333 11.4153 2.21898 11.1636 1.41834ZM9.67331 1.11674C9.81098 1.1602 9.93614 1.23626 10.0381 1.33847C10.1401 1.44068 10.216 1.56601 10.2592 1.70381C10.4589 2.33883 10.4808 3.01647 10.3225 3.66307C10.1642 4.30967 9.83181 4.9005 9.36141 5.37135L6.71169 8.02218C6.6228 8.11108 6.50226 8.16102 6.37657 8.16102C6.25088 8.16102 6.13033 8.11108 6.04144 8.02218L3.35665 5.33626C3.26779 5.24733 3.21786 5.12673 3.21786 5.00099C3.21786 4.87525 3.26779 4.75465 3.35665 4.66572L6.00636 2.01584C6.4771 1.54507 7.06785 1.21242 7.71436 1.05407C8.36088 0.895714 9.03842 0.91772 9.67331 1.11769V1.11674ZM8.66461 7.4095C8.69969 7.78223 8.57455 8.16823 8.28825 8.45371L7.8787 8.86342L7.545 8.52958L8.66461 7.4095ZM2.9253 3.0885C3.06084 2.95274 3.22468 2.84859 3.40511 2.7835C3.58554 2.71841 3.77811 2.69399 3.96907 2.71198L2.85041 3.83112L2.51575 3.49822L2.9253 3.0885ZM4.52176 7.84387L4.27338 8.25833L3.12059 7.10506L3.53582 6.85657L4.52176 7.84293V7.84387ZM2.69872 9.35186C2.74279 9.30783 2.77777 9.25555 2.80164 9.198C2.82552 9.14045 2.83783 9.07876 2.83787 9.01645C2.83791 8.95415 2.82569 8.89244 2.8019 8.83486C2.7781 8.77727 2.74321 8.72494 2.6992 8.68085C2.65519 8.63676 2.60293 8.60178 2.5454 8.57789C2.48788 8.55401 2.42621 8.54169 2.36393 8.54165C2.30165 8.5416 2.23997 8.55383 2.18241 8.57763C2.12485 8.60144 2.07254 8.63635 2.02847 8.68038L0.777086 9.93229C0.733015 9.97632 0.698043 10.0286 0.674168 10.0861C0.650293 10.1437 0.637982 10.2054 0.637937 10.2677C0.637893 10.33 0.650117 10.3917 0.673911 10.4493C0.697705 10.5069 0.732603 10.5592 0.776612 10.6033C0.820621 10.6474 0.87288 10.6824 0.930405 10.7063C0.98793 10.7301 1.04959 10.7425 1.11188 10.7425C1.17416 10.7425 1.23584 10.7303 1.2934 10.7065C1.35096 10.6827 1.40326 10.6478 1.44734 10.6038L2.69872 9.35186ZM1.69193 7.67411C1.78079 7.76303 1.83071 7.88363 1.83071 8.00937C1.83071 8.13512 1.78079 8.25571 1.69193 8.34464L1.18947 8.8473C1.14568 8.89253 1.09333 8.92857 1.03546 8.95334C0.977598 8.97811 0.915382 8.9911 0.852445 8.99156C0.789508 8.99201 0.72711 8.97993 0.668892 8.956C0.610674 8.93207 0.557802 8.89679 0.513361 8.8522C0.468919 8.80762 0.433798 8.75462 0.410047 8.69631C0.386296 8.638 0.37439 8.57554 0.375024 8.51258C0.375658 8.44962 0.38882 8.38741 0.41374 8.3296C0.438661 8.27178 0.474842 8.2195 0.520173 8.17582L1.02262 7.67411C1.11147 7.5855 1.23182 7.53574 1.35727 7.53574C1.48273 7.53574 1.60307 7.5855 1.69193 7.67411ZM3.70457 10.3581C3.74984 10.3144 3.78596 10.2621 3.8108 10.2042C3.83564 10.1463 3.84872 10.0841 3.84926 10.0212C3.84981 9.95819 3.83782 9.89575 3.81398 9.83747C3.79015 9.77919 3.75495 9.72625 3.71045 9.68172C3.66594 9.6372 3.61302 9.60198 3.55476 9.57814C3.49651 9.5543 3.43409 9.5423 3.37115 9.54285C3.30821 9.54339 3.24601 9.55647 3.18818 9.58133C3.13035 9.60618 3.07805 9.64231 3.03432 9.6876L2.53187 10.1903C2.48786 10.2344 2.45296 10.2867 2.42917 10.3443C2.40538 10.4018 2.39315 10.4636 2.3932 10.5259C2.39329 10.6517 2.44334 10.7723 2.53235 10.8613C2.62135 10.9502 2.74202 11.0001 2.86781 11C2.99359 10.9999 3.11419 10.9498 3.20307 10.8608L3.70552 10.3581H3.70457Z' fill='black' />
                </svg>
                <span>6</span>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <img class='flex-none w-8 h-8 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/47.jpg' alt='avatar' />
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex justify-between flex-col bg-white p-4 mb-4 space-y-5 border-l-[5px] border-pink-600'>
          <div className='flex justify-between items-start'>
            <div className='flex items-start space-x-2'>
              <svg width='34' height='34' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4' fill='currentColor' />
              </svg>
              <h5 className='font-medium text-lg'>Improve large organization onboarding</h5>
            </div>
            <button className='flex items-center justify-center hover:bg-slate-200 rounded-full p-1 transition-all'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
              </svg>
            </button>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex space-x-2 items-center'>
              <div className='flex items-center space-x-2 bg-pink-200 py-1 px-2 rounded-md'>
                <svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z' fill='currentColor' />
                </svg>
                <span>24</span>
              </div>
              <div className='flex items-center space-x-2 bg-pink-200 py-1 px-2 rounded-md'>
                <svg width='16' height='16' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M3 8.25H1.5V10.5H3V8.25ZM6.75 5.25H5.25V10.5H6.75V5.25ZM10.5 1.5V10.5H9V1.5H10.5ZM9 0.75C8.80109 0.75 8.61032 0.829018 8.46967 0.96967C8.32902 1.11032 8.25 1.30109 8.25 1.5V10.5C8.25 10.6989 8.32902 10.8897 8.46967 11.0303C8.61032 11.171 8.80109 11.25 9 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V1.5C11.25 1.30109 11.171 1.11032 11.0303 0.96967C10.8897 0.829018 10.6989 0.75 10.5 0.75H9ZM4.5 5.25C4.5 5.05109 4.57902 4.86032 4.71967 4.71967C4.86032 4.57902 5.05109 4.5 5.25 4.5H6.75C6.94891 4.5 7.13968 4.57902 7.28033 4.71967C7.42098 4.86032 7.5 5.05109 7.5 5.25V10.5C7.5 10.6989 7.42098 10.8897 7.28033 11.0303C7.13968 11.171 6.94891 11.25 6.75 11.25H5.25C5.05109 11.25 4.86032 11.171 4.71967 11.0303C4.57902 10.8897 4.5 10.6989 4.5 10.5V5.25ZM0.75 8.25C0.75 8.05109 0.829018 7.86032 0.96967 7.71967C1.11032 7.57902 1.30109 7.5 1.5 7.5H3C3.19891 7.5 3.38968 7.57902 3.53033 7.71967C3.67098 7.86032 3.75 8.05109 3.75 8.25V10.5C3.75 10.6989 3.67098 10.8897 3.53033 11.0303C3.38968 11.171 3.19891 11.25 3 11.25H1.5C1.30109 11.25 1.11032 11.171 0.96967 11.0303C0.829018 10.8897 0.75 10.6989 0.75 10.5V8.25Z' fill='black' />
                </svg>
                <span>6</span>
              </div>
              <div className='flex items-center space-x-2 bg-pink-200 py-1 px-2 rounded-md'>
                <svg width='16' height='16' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M4.74795 16.875C4.80068 16.875 4.85342 16.8697 4.90615 16.8618L9.34111 16.084C9.39385 16.0734 9.44395 16.0497 9.48086 16.0102L20.6579 4.83311C20.6824 4.80871 20.7017 4.77974 20.715 4.74784C20.7282 4.71594 20.735 4.68175 20.735 4.64722C20.735 4.61268 20.7282 4.57849 20.715 4.54659C20.7017 4.5147 20.6824 4.48572 20.6579 4.46133L16.2757 0.0764649C16.2256 0.0263672 16.1597 0 16.0885 0C16.0173 0 15.9514 0.0263672 15.9013 0.0764649L4.72422 11.2535C4.68467 11.2931 4.66094 11.3405 4.65039 11.3933L3.87256 15.8282C3.84691 15.9695 3.85607 16.1148 3.89926 16.2518C3.94245 16.3887 4.01835 16.513 4.12041 16.614C4.29443 16.7827 4.51328 16.875 4.74795 16.875ZM6.5251 12.2766L16.0885 2.71582L18.0212 4.64853L8.45781 14.2093L6.11377 14.6232L6.5251 12.2766ZM21.1562 19.0898H1.75C1.2833 19.0898 0.90625 19.4669 0.90625 19.9336V20.8828C0.90625 20.9988 1.00117 21.0938 1.11719 21.0938H21.7891C21.9051 21.0938 22 20.9988 22 20.8828V19.9336C22 19.4669 21.6229 19.0898 21.1562 19.0898Z' fill='black' />
                </svg>
                <span>12</span>
              </div>
              <div className='flex items-center space-x-2 bg-pink-200 py-1 px-2 rounded-md'>
                <svg width='18' height='17' viewBox='0 0 12 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M6.03101 3.16912C6.17397 3.02653 6.34361 2.91351 6.53024 2.83653C6.71687 2.75955 6.91683 2.72011 7.1187 2.72046C7.32057 2.72081 7.5204 2.76095 7.70676 2.83859C7.89312 2.91622 8.06236 3.02982 8.20482 3.17291C8.80397 3.77231 8.80871 4.74634 8.20862 5.34764C8.06566 5.49023 7.89602 5.60324 7.70939 5.68022C7.52276 5.75721 7.32279 5.79665 7.12092 5.7963C6.91905 5.79594 6.71923 5.7558 6.53287 5.67817C6.34651 5.60054 6.17726 5.48693 6.0348 5.34384C5.89178 5.20132 5.77822 5.03201 5.70062 4.84557C5.62302 4.65913 5.58289 4.45922 5.58254 4.25727C5.58219 4.05531 5.62161 3.85527 5.69856 3.66856C5.77551 3.48185 5.88848 3.31214 6.03101 3.16912ZM7.53362 3.8425C7.4236 3.73173 7.27412 3.66921 7.11803 3.66868C6.96195 3.66814 6.81204 3.72964 6.70126 3.83965C6.59142 3.9506 6.53012 4.10064 6.53083 4.25679C6.53154 4.41294 6.59421 4.56242 6.70505 4.67236C6.81495 4.78325 6.96436 4.84595 7.12045 4.84666C7.27654 4.84737 7.42652 4.78604 7.53742 4.67616C7.64726 4.56521 7.70856 4.41517 7.70785 4.25902C7.70714 4.10286 7.64447 3.95339 7.53362 3.84344V3.8425ZM11.1636 1.41834C11.0744 1.13506 10.9182 0.877483 10.7083 0.667468C10.4983 0.457452 10.2409 0.301194 9.95771 0.211951C9.15736 -0.0401826 8.30323 -0.0679289 7.48821 0.13173C6.6732 0.331388 5.92852 0.750806 5.33517 1.34436L4.73886 1.94187C4.32475 1.76355 3.86669 1.7136 3.4239 1.79847C2.98111 1.88335 2.57395 2.09915 2.25505 2.41797L1.50991 3.16248C1.46576 3.20653 1.43074 3.25886 1.40684 3.31647C1.38295 3.37408 1.37065 3.43585 1.37065 3.49822C1.37065 3.5606 1.38295 3.62236 1.40684 3.67997C1.43074 3.73758 1.46576 3.78991 1.50991 3.83396L2.31572 4.64012C2.25272 4.88038 2.25371 5.13296 2.31857 5.37273C2.38344 5.6125 2.50992 5.8311 2.68545 6.00679L2.84377 6.16517L2.11095 6.60334C2.04902 6.64035 1.99635 6.691 1.95695 6.75145C1.91754 6.8119 1.89245 6.88055 1.88359 6.95217C1.87472 7.02379 1.8823 7.09649 1.90577 7.16473C1.92923 7.23297 1.96796 7.29495 2.01899 7.34595L4.03164 9.35945C4.08262 9.4105 4.14458 9.44924 4.21279 9.47272C4.281 9.49619 4.35367 9.50378 4.42526 9.49491C4.49685 9.48604 4.56547 9.46094 4.62589 9.42152C4.68632 9.3821 4.73695 9.32941 4.77394 9.26745L5.21192 8.53527L5.37024 8.69271C5.73997 9.06354 6.26423 9.18683 6.73729 9.06259L7.5431 9.86875C7.63199 9.95765 7.75254 10.0076 7.87823 10.0076C8.00392 10.0076 8.12447 9.95765 8.21336 9.86875L8.95755 9.12424C9.2764 8.80531 9.49229 8.39803 9.5773 7.95505C9.66231 7.51207 9.61253 7.05376 9.43441 6.63938L10.0307 6.04188C10.624 5.44847 11.0433 4.70368 11.2431 3.88851C11.4428 3.07333 11.4153 2.21898 11.1636 1.41834ZM9.67331 1.11674C9.81098 1.1602 9.93614 1.23626 10.0381 1.33847C10.1401 1.44068 10.216 1.56601 10.2592 1.70381C10.4589 2.33883 10.4808 3.01647 10.3225 3.66307C10.1642 4.30967 9.83181 4.9005 9.36141 5.37135L6.71169 8.02218C6.6228 8.11108 6.50226 8.16102 6.37657 8.16102C6.25088 8.16102 6.13033 8.11108 6.04144 8.02218L3.35665 5.33626C3.26779 5.24733 3.21786 5.12673 3.21786 5.00099C3.21786 4.87525 3.26779 4.75465 3.35665 4.66572L6.00636 2.01584C6.4771 1.54507 7.06785 1.21242 7.71436 1.05407C8.36088 0.895714 9.03842 0.91772 9.67331 1.11769V1.11674ZM8.66461 7.4095C8.69969 7.78223 8.57455 8.16823 8.28825 8.45371L7.8787 8.86342L7.545 8.52958L8.66461 7.4095ZM2.9253 3.0885C3.06084 2.95274 3.22468 2.84859 3.40511 2.7835C3.58554 2.71841 3.77811 2.69399 3.96907 2.71198L2.85041 3.83112L2.51575 3.49822L2.9253 3.0885ZM4.52176 7.84387L4.27338 8.25833L3.12059 7.10506L3.53582 6.85657L4.52176 7.84293V7.84387ZM2.69872 9.35186C2.74279 9.30783 2.77777 9.25555 2.80164 9.198C2.82552 9.14045 2.83783 9.07876 2.83787 9.01645C2.83791 8.95415 2.82569 8.89244 2.8019 8.83486C2.7781 8.77727 2.74321 8.72494 2.6992 8.68085C2.65519 8.63676 2.60293 8.60178 2.5454 8.57789C2.48788 8.55401 2.42621 8.54169 2.36393 8.54165C2.30165 8.5416 2.23997 8.55383 2.18241 8.57763C2.12485 8.60144 2.07254 8.63635 2.02847 8.68038L0.777086 9.93229C0.733015 9.97632 0.698043 10.0286 0.674168 10.0861C0.650293 10.1437 0.637982 10.2054 0.637937 10.2677C0.637893 10.33 0.650117 10.3917 0.673911 10.4493C0.697705 10.5069 0.732603 10.5592 0.776612 10.6033C0.820621 10.6474 0.87288 10.6824 0.930405 10.7063C0.98793 10.7301 1.04959 10.7425 1.11188 10.7425C1.17416 10.7425 1.23584 10.7303 1.2934 10.7065C1.35096 10.6827 1.40326 10.6478 1.44734 10.6038L2.69872 9.35186ZM1.69193 7.67411C1.78079 7.76303 1.83071 7.88363 1.83071 8.00937C1.83071 8.13512 1.78079 8.25571 1.69193 8.34464L1.18947 8.8473C1.14568 8.89253 1.09333 8.92857 1.03546 8.95334C0.977598 8.97811 0.915382 8.9911 0.852445 8.99156C0.789508 8.99201 0.72711 8.97993 0.668892 8.956C0.610674 8.93207 0.557802 8.89679 0.513361 8.8522C0.468919 8.80762 0.433798 8.75462 0.410047 8.69631C0.386296 8.638 0.37439 8.57554 0.375024 8.51258C0.375658 8.44962 0.38882 8.38741 0.41374 8.3296C0.438661 8.27178 0.474842 8.2195 0.520173 8.17582L1.02262 7.67411C1.11147 7.5855 1.23182 7.53574 1.35727 7.53574C1.48273 7.53574 1.60307 7.5855 1.69193 7.67411ZM3.70457 10.3581C3.74984 10.3144 3.78596 10.2621 3.8108 10.2042C3.83564 10.1463 3.84872 10.0841 3.84926 10.0212C3.84981 9.95819 3.83782 9.89575 3.81398 9.83747C3.79015 9.77919 3.75495 9.72625 3.71045 9.68172C3.66594 9.6372 3.61302 9.60198 3.55476 9.57814C3.49651 9.5543 3.43409 9.5423 3.37115 9.54285C3.30821 9.54339 3.24601 9.55647 3.18818 9.58133C3.13035 9.60618 3.07805 9.64231 3.03432 9.6876L2.53187 10.1903C2.48786 10.2344 2.45296 10.2867 2.42917 10.3443C2.40538 10.4018 2.39315 10.4636 2.3932 10.5259C2.39329 10.6517 2.44334 10.7723 2.53235 10.8613C2.62135 10.9502 2.74202 11.0001 2.86781 11C2.99359 10.9999 3.11419 10.9498 3.20307 10.8608L3.70552 10.3581H3.70457Z' fill='black' />
                </svg>
                <span>6</span>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <img class='flex-none w-8 h-8 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/46.jpg' alt='avatar' />
            </div>
          </div>
        </div>

        {/** widget */}
        <a href='#' className='break-inside flex flex-row items-center justify-between bg-gradient-to-r from-[#7400e1] to-[#5b00ca] rounded-xl p-4 mb-4'>
          <div className='mr-auto'>
            <h3 className='font-bold text-xl text-white'>Tarragona</h3>
            <h5 className='text-white'>Cloudy</h5>
          </div>
          <span className='text-4xl font-bold text-white'>24°</span>
          <svg className='w-10 h-10 ml-auto' viewBox='0 0 36 36' preserveAspectRatio='xMidYMid meet'><path className='fill-[#FFE600]' d='M14 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm16 12s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 14s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm3.872-7.957s1.414 1.414 0 2.828s-2.828 0-2.828 0L3.629 7.458s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm19.085 2.828s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414z' /><circle className='fill-[#FFE600]' cx='16' cy='16' r='9' /><path className='fill-white stroke' d='M28 20c-.825 0-1.62.125-2.369.357A6.498 6.498 0 0 0 19.5 16c-3.044 0-5.592 2.096-6.299 4.921A4.459 4.459 0 0 0 10.5 20A4.5 4.5 0 0 0 6 24.5c0 .604.123 1.178.339 1.704A4.98 4.98 0 0 0 5 26c-2.762 0-5 2.238-5 5s2.238 5 5 5h23a8 8 0 1 0 0-16z' /></svg>
        </a>

        {/** widget */}
        <div className='break-inside flex justify-between flex-col rounded-xl bg-white p-4 mb-4 space-y-2'>
          <div className='flex justify-between items-start'>
            <div className='flex items-center space-x-2'>
              <svg width='35' height='16' viewBox='0 0 35 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M34.59 13L30.51 8L34.51 3.1C34.7288 2.83194 34.8666 2.50707 34.9074 2.16347C34.9481 1.81987 34.89 1.47178 34.74 1.15999C34.588 0.810534 34.336 0.513891 34.0156 0.307458C33.6953 0.101025 33.321 -0.0059584 32.94 -4.85155e-06H1.94C1.68917 -0.00397559 1.44001 0.0415059 1.20676 0.133841C0.973502 0.226177 0.760723 0.363558 0.580571 0.538138C0.400419 0.712719 0.256424 0.921077 0.156808 1.15132C0.0571926 1.38155 0.00390885 1.62916 0 1.88V14.13C0.0105107 14.6348 0.220501 15.115 0.58405 15.4654C0.947598 15.8158 1.43512 16.008 1.94 16H33.05C33.4183 16.0062 33.7806 15.9068 34.0943 15.7136C34.4079 15.5205 34.6597 15.2416 34.82 14.91C34.9639 14.6019 35.0186 14.2597 34.978 13.9221C34.9373 13.5845 34.8029 13.2651 34.59 13ZM2 14V2H32.78L27.94 7.93L32.85 14H2Z' fill='black' />
                <path d='M9.39 9.35L6.13 5H5V11.18H6.13V6.84L9.39 11.18H10.51V5H9.39V9.35Z' fill='black' />
                <path d='M12.1799 11.18H16.8399V10.16H13.3099V8.55H16.4999V7.52H13.3099V6.03H16.8399V5H12.1799V11.18Z' fill='black' />
                <path d='M24.5201 9.43L23.0601 5H21.8401L20.3701 9.43L19.0501 5H17.8201L19.7801 11.18H20.8901L22.4501 6.59L24.0001 11.18H25.1301L27.0801 5H25.8501L24.5201 9.43Z' fill='black' />
              </svg>
              <h5 className='font-medium text-lg'>Components</h5>
            </div>
            <button className='flex items-center justify-center hover:bg-slate-200 rounded-full p-1 transition-all'>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' fill='currentColor' />
              </svg>
            </button>
          </div>
          <div className='flex justify-between items-start flex-col'>
            <h5 className='font-medium text-lg'>Improve large organization</h5>
            <p>Lorem ipsum dolor sit amet, consecte permis palis.</p>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-[#12C0E7] rounded-full p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <div className='overflow-hidden rounded-full border-1 border-white'>
              <img class='flex-none w-16 h-16 rounded-full object-cover border-2 border-white' src='https://randomuser.me/api/portraits/women/62.jpg' alt='avatar' />
            </div>
            <div className='flex-auto'>
              <a href='#' className='no-underline font-bold block text-lg text-white'>Mariam jimenez</a>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-[#740EF5] rounded-full py-4 px-6 mb-4'>
          <div className='flex items-center space-x-4'>
            <div>
              <dt class='sr-only'>Users</dt>
              <dd className='flex justify-start -space-x-1.5'>
                <a href='#' className='inline-block -m-1'>
                  <img class='w-12 h-12 rounded-full bg-slate-100 ring-2 ring-[#740EF5]' src='https://randomuser.me/api/portraits/women/46.jpg' alt='avatar' />
                </a>
                <a href='#' className='inline-block -m-1'>
                  <img class='w-12 h-12 rounded-full bg-slate-100 ring-2 ring-[#740EF5]' src='https://randomuser.me/api/portraits/men/45.jpg' alt='avatar' />
                </a>
                <a href='#' className='inline-block -m-1'>
                  <img class='w-12 h-12 rounded-full bg-slate-100 ring-2 ring-[#740EF5]' src='https://randomuser.me/api/portraits/women/47.jpg' alt='avatar' />
                </a>
              </dd>
            </div>
            <div className='flex flex-col flex-auto'>
              <a href='#' className='no-underline font-bold block text-lg text-white'>Teams</a>
              <span className='text-[#F5EEFF] text-sm'>Two currently</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-[#FFF614] rounded-full p-6 mb-4'>
          <div className='flex items-center space-x-4'>
            <div>
              <dt class='sr-only'>Users</dt>
              <dd className='flex justify-start -space-x-1.5'>
                <a href='#' className='inline-block -m-1'>
                  <img class='w-14 h-14 rounded-full bg-slate-100 ring-2 ring-[#FFF614]' src='https://randomuser.me/api/portraits/women/16.jpg' alt='avatar' />
                </a>
                <a href='#' className='inline-block -m-1'>
                  <img class='w-14 h-14 rounded-full bg-slate-100 ring-2 ring-[#FFF614]' src='https://randomuser.me/api/portraits/men/65.jpg' alt='avatar' />
                </a>
              </dd>
            </div>
            <div className='flex flex-col flex-auto'>
              <a href='#' className='no-underline font-bold block text-xl text-black'>New Teams</a>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex flex-col justify-between bg-white rounded-[2rem] p-6 mb-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <div className='flex justify-center items-center bg-slate-200 w-12 h-12 rounded-full'>
                <svg width='26' height='26' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M21.7 13.35L20.7 14.35L18.65 12.35L19.65 11.35C19.85 11.14 20.19 11.13 20.42 11.35L21.7 12.63C21.89 12.83 21.89 13.15 21.7 13.35M12 18.94V21H14.06L20.12 14.88L18.07 12.88L12 18.94M5 19H10V21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V9H5V19M5 5V7H19V5H5Z' />
                </svg>
              </div>
              <div className='flex flex-col flex-auto'>
                <span className='font-medium text-sm text-slate-400'>SCHEDULE DATE</span>
                <a href='#' className='no-underline font-bold block  text-black'>Sat 24, September</a>
              </div>
            </div>
            <button className='no-underline inline-block hover:bg-slate-100 transition-all rounded-full p-2'>
              <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' fill='currentColor' />
              </svg>
            </button>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4'>
          <img class='flex-none w-24 h-24 object-cover' src='https://randomuser.me/api/portraits/women/45.jpg' alt='avatar' />
          <div className='flex-auto'>
            <a href='#' className='no-underline font-bold block'>Julia Robert</a>
            <span className='text-slate-600'>Frontend Development</span>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pl-4 mb-4'>
          <div className='flex-auto text-right'>
            <a href='#' className='no-underline font-bold block'>Fermin vargas</a>
            <span className='text-slate-600'>Construction manager</span>
          </div>
          <img class='flex-none w-24 h-24 object-cover' src='https://randomuser.me/api/portraits/men/45.jpg' alt='avatar' />
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-[#ff7300] text-white rounded-xl overflow-hidden pr-4 mb-4'>
          <div className='flex flex-1 flex-col p-4'>
            <div className='font-bold block text-lg'> Creadores </div>
            <div className='font-bold block text-lg'> de Tendencias </div>
          </div>
          <img class='flex-none w-20 h-20 object-cover rotate-12 rounded-lg -mb-6 -mr-6' src='https://randomuser.me/api/portraits/women/58.jpg' alt='avatar' />
        </div>

        {/** widget */}
        <div className='flex flex-col break-inside bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center justify-between'>
            <a href='#' className='flex flex-row items-center justify-center space-x-4'>
              <svg width='42' height='42' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0.375 21C0.375 25.0562 1.54375 28.8375 3.5375 32H38.3937C40.3875 28.8375 41.5563 25.0562 41.5563 21C41.5563 16.9437 40.3875 13.1625 38.3937 10H3.5375C1.54375 13.1625 0.375 16.9437 0.375 21Z' fill='#FFCE31' />
                <path d='M38.4625 10C34.8188 4.225 28.3563 0.375 21 0.375C13.6438 0.375 7.18125 4.225 3.5375 10H38.4625Z' fill='#ED4C5C' />
                <path d='M3.5375 32C7.18125 37.775 13.6438 41.625 21 41.625C28.3563 41.625 34.8188 37.775 38.4625 32H3.5375Z' fill='#ED4C5C' />
                <path d='M5.325 18.7313H7.525V19.9688H5.325V18.7313Z' fill='#C8B100' />
                <path d='M5.325 27.8063H7.59375V28.975H5.325V27.8063Z' fill='#C8B100' />
                <path d='M5.11874 25.8813C4.91249 26.0188 4.77499 26.1563 4.77499 26.225C4.77499 26.2938 4.84374 26.3625 4.98124 26.4313C5.11874 26.5 5.25624 26.6375 5.18749 26.775C5.32499 26.6375 5.39374 26.5 5.39374 26.3625C5.39374 26.1563 5.25624 25.95 5.11874 25.8813Z' fill='#ED4C5C' />
                <path d='M5.66875 19.9688H7.25V27.8063H5.66875V19.9688Z' fill='white' />
                <path d='M8.89999 22.8563C8.55624 22.7188 7.93749 22.5812 7.24999 22.5812C7.04374 22.5812 6.76874 22.5813 6.49374 22.65C5.53124 22.7875 4.77499 23.2 4.84374 23.475L4.49999 22.7188C4.43124 22.375 5.25624 21.9625 6.28749 21.7562C6.63124 21.6875 6.97499 21.6875 7.24999 21.6875C7.93749 21.6875 8.55624 21.7562 8.89999 21.8937V22.8563Z' fill='#ED4C5C' />
                <path d='M5.66874 23.8875C5.25624 23.8875 4.91249 23.75 4.91249 23.5438C4.91249 23.4063 5.04999 23.2 5.32499 23.0625H5.73749L5.66874 23.8875Z' fill='#ED4C5C' />
                <path d='M7.25 23.2687C7.525 23.3375 7.73125 23.4062 7.86875 23.475C7.9375 23.5437 7.6625 23.8187 7.25 24.025V23.2687Z' fill='#ED4C5C' />
                <path d='M4.63749 25.4C4.56874 25.2625 5.04999 24.9875 5.66874 24.7813C5.94374 24.7125 6.14999 24.575 6.49374 24.4375C7.31874 24.0938 8.00625 23.6125 7.86875 23.475L8.00624 24.3C8.07499 24.4375 7.52499 24.85 6.69999 25.2625C6.42499 25.4 5.94374 25.6063 5.66874 25.675C5.18749 25.8125 4.77499 26.0875 4.77499 26.1563L4.63749 25.4Z' fill='#ED4C5C' />
                <path d='M20.1063 18.7313H22.3063V19.9688H20.1063V18.7313Z' fill='#C8B100' />
                <path d='M20.0375 27.8063H22.3063V28.975H20.0375V27.8063Z' fill='#C8B100' />
                <path d='M22.5125 25.8813C22.7188 26.0188 22.8563 26.1563 22.8563 26.225C22.8563 26.2938 22.7875 26.3625 22.65 26.4313C22.5125 26.5688 22.375 26.775 22.4438 26.8438C22.3063 26.7063 22.2375 26.5688 22.2375 26.4313C22.2375 26.1563 22.375 25.95 22.5125 25.8813Z' fill='#ED4C5C' />
                <path d='M20.3813 19.9688H21.9625V27.8063H20.3813V19.9688Z' fill='white' />
                <path d='M18.7312 22.8563C19.075 22.7188 19.6937 22.5812 20.3812 22.5812C20.5875 22.5812 20.8625 22.5813 21.1375 22.65C22.1 22.7875 22.8562 23.2 22.7875 23.475L23.1312 22.65C23.2 22.3063 22.375 21.8937 21.3437 21.6875H20.3812C19.6937 21.6875 19.075 21.7562 18.7312 21.8937V22.8563Z' fill='#ED4C5C' />
                <path d='M21.9625 23.8875C22.375 23.8875 22.7188 23.75 22.7188 23.5438C22.7188 23.4063 22.5813 23.2 22.3063 23.0625H21.8938L21.9625 23.8875Z' fill='#ED4C5C' />
                <path d='M20.3812 23.2687C20.1062 23.3375 19.9 23.4062 19.7625 23.475C19.6937 23.5437 19.9687 23.8187 20.3812 24.025V23.2687Z' fill='#ED4C5C' />
                <path d='M22.9938 25.4C23.0625 25.2625 22.5813 24.9875 21.9625 24.7812C21.6875 24.7125 21.4813 24.575 21.1375 24.4375C20.3125 24.0937 19.625 23.6125 19.7625 23.475L19.625 24.3C19.5563 24.4375 20.1062 24.85 20.9312 25.2625C21.2062 25.4 21.6875 25.6062 21.9625 25.675C22.4438 25.8125 22.8562 26.1562 22.7875 26.225L22.9938 25.4Z' fill='#ED4C5C' />
                <path d='M13.7813 14.3312C15.0875 14.3312 17.7688 14.6062 18.7313 15.5687C17.7 18.0437 16.05 17.0125 13.7813 17.0125C11.5813 17.0125 9.8625 18.0437 8.83125 15.5687C9.79375 14.6062 12.4063 14.3312 13.7813 14.3312Z' fill='#ED4C5C' />
                <path d='M17.15 17.0812C16.325 16.6 15.0875 16.5312 13.7813 16.5312C12.475 16.5312 11.2375 16.6687 10.4125 17.0812L10.6875 18.25C11.4438 18.4563 12.5438 18.5938 13.7813 18.6625C15.0188 18.6625 16.05 18.525 16.875 18.25L17.15 17.0812Z' fill='#C8B100' />
                <path d='M18.3188 14.125C18.0438 13.9187 17.4938 13.7125 17.0125 13.7125C16.8063 13.7125 16.6 13.7125 16.3938 13.7812C16.3938 13.7812 15.9813 13.2313 15.0188 13.2313C14.675 13.2313 14.4 13.3 14.125 13.4375V13.3687C14.0563 13.2312 13.9188 13.0938 13.7813 13.0938C13.6438 13.0938 13.4375 13.3 13.4375 13.4375V13.5063C13.1625 13.3688 12.8875 13.3 12.5438 13.3C11.5813 13.3 11.1688 13.9188 11.1688 13.85C10.9625 13.7813 10.7563 13.7812 10.55 13.7812C7.3875 13.7812 8.96875 15.9125 8.96875 15.9125L9.3125 15.5C8.55625 14.5375 9.24375 13.9875 10.6188 13.9875C10.825 13.9875 10.9625 13.9875 11.1 14.0562C10.6188 14.7437 11.5125 15.3625 11.5125 15.3625L11.7188 15.0187C11.2375 14.675 11.1688 13.5063 12.5438 13.5063C12.8875 13.5063 13.1625 13.575 13.4375 13.7812C13.4375 13.85 13.3688 14.8125 13.3 14.95L13.85 15.4312L14.4 14.95C14.3313 14.7438 14.2625 13.85 14.2625 13.7812C14.4688 13.6438 14.8125 13.5063 15.1563 13.5063C16.6 13.5063 16.6 14.675 15.9813 15.0187L16.1875 15.3625C16.1875 15.3625 16.9438 14.7437 16.6 14.0562C16.7375 14.0562 16.9438 13.9875 17.0813 13.9875C18.7313 13.9875 18.8 15.225 18.3875 15.5L18.6625 15.9125C18.525 15.9125 19.2813 14.95 18.3188 14.125Z' fill='#C8B100' />
                <path d='M13.3687 12.8188C13.3687 12.6125 13.575 12.4062 13.7812 12.4062C13.9875 12.4062 14.1937 12.6125 14.1937 12.8188C14.1937 13.025 13.9875 13.2313 13.7812 13.2313C13.575 13.2313 13.3687 13.025 13.3687 12.8188Z' fill='#005BBF' />
                <path d='M13.6437 11.65V11.8562H13.4375V12.0625H13.6437V12.75H13.3687V12.9562H14.1937L14.2625 12.8187L14.1937 12.75H13.9187V12.0625H14.125V11.8562H13.9187V11.65H13.6437Z' fill='#C8B100' />
                <path d='M13.7812 18.4562C12.6812 18.4562 11.7187 18.3187 10.9625 18.1125C11.7187 17.9062 12.6812 17.7687 13.7812 17.7687C14.8812 17.7687 15.8437 17.9062 16.6 18.1125C15.9125 18.3187 14.8812 18.4562 13.7812 18.4562Z' fill='#ED4C5C' />
                <path d='M13.85 30.35C12.5437 30.35 11.3062 30.0063 10.2062 29.525C9.38124 29.1125 8.89999 28.3563 8.89999 27.4625V24.1625H18.8V27.4625C18.8 28.3563 18.25 29.1813 17.4937 29.525C16.3937 30.075 15.1562 30.35 13.85 30.35Z' fill='white' />
                <path d='M13.7813 18.6625L18.7313 18.6625V24.1625H13.7812L13.7813 18.6625Z' fill='white' />
                <path d='M13.85 27.4625C13.85 28.7688 12.75 29.8 11.375 29.8C9.99999 29.8 8.89999 28.7688 8.89999 27.4625V24.1625H13.85V27.4625Z' fill='#ED4C5C' />
                <path d='M9.93126 29.3875C10.0688 29.4562 10.275 29.5937 10.55 29.6625V24.025H10L9.93126 29.3875Z' fill='#C8B100' />
                <path d='M8.83125 27.3937C8.83125 28.0812 9.10625 28.6312 9.38125 28.9062V24.025H8.83125V27.3937Z' fill='#C8B100' />
                <path d='M11.0312 29.8H11.5812V24.025H11.0312V29.8Z' fill='#C7B500' />
                <path d='M12.1313 29.6625C12.3375 29.5937 12.6125 29.4562 12.75 29.3875V24.025H12.2L12.1313 29.6625Z' fill='#C8B100' />
                <path d='M8.83125 18.6625L13.7813 18.6625L13.7812 24.1625H8.83125V18.6625Z' fill='#ED4C5C' />
                <path d='M13.3 28.9062C13.575 28.7 13.7813 28.2188 13.85 27.6688V24.0938H13.3V28.9062Z' fill='#C8B100' />
                <path d='M18.8 24.1625V27.4625C18.8 28.7688 17.7 29.8 16.325 29.8C14.95 29.8 13.85 28.7688 13.85 27.4625V24.1625H18.8Z' fill='#ED4C5C' />
                <path d='M17.0125 19.625C17.2188 20.0375 17.2188 21.0687 16.6 20.8625C16.7375 20.9312 16.8063 21.4125 17.0125 21.6875C17.3563 22.1 17.7688 21.7562 17.7 21.275C17.5625 20.5187 17.6312 20.0375 17.7687 19.2812C17.7687 19.35 18.1125 19.35 18.25 19.2125C18.1812 19.4187 18.1125 19.6937 18.25 19.6937C18.1125 19.9 17.7688 20.2437 17.7 20.45C17.6313 20.9312 18.3875 21.825 17.5625 22.0312C17.0125 22.1687 17.3562 22.5812 17.5625 22.7875C17.5625 22.7875 17.2875 23.6812 17.425 23.6125C16.875 23.8187 17.0125 23.3375 17.0125 23.3375C17.2875 22.5125 16.5313 22.4437 16.6 22.3062C15.9125 22.2375 16.6687 22.925 16.05 22.925C15.9125 22.925 15.6375 23.0625 15.6375 23.0625C14.8812 22.9937 15.2937 22.3062 15.5687 22.375C15.775 22.4437 15.9812 22.7875 15.9812 22.3062C15.9812 22.3062 15.6375 21.7562 16.5312 21.7562C16.1875 21.7562 15.9812 21.4812 15.8437 21.1375C15.7062 21.2062 15.5 21.55 14.7437 21.6187C14.7437 21.6187 14.5375 20.8625 14.7437 21C15.0187 21.1375 15.1562 21.1375 15.4312 20.8625C15.2937 20.6562 14.4687 20.3812 14.6062 19.9C14.6062 19.7625 15.0187 19.5562 15.0187 19.5562C14.95 19.9 15.1562 20.2437 15.5687 20.2437C16.1187 20.3125 15.9125 20.1062 15.9812 19.9687C16.05 19.8312 16.4625 20.0375 16.325 19.6937C16.325 19.625 15.8437 19.5562 15.9812 19.35C16.2562 19.0062 16.6688 19.2812 17.0125 19.625Z' fill='#ED4C5C' />
                <path d='M13.85 29.6625L13.7125 29.3187L13.85 28.9062L13.9875 29.3187L13.85 29.6625Z' fill='#ED4C5C' />
                <path d='M10.3437 19.8312V20.175H10.4812V20.45H10.1375V21.1375H10.3437V22.65H9.93124V23.4062H12.75V22.65H12.4062V21.1375H12.5437V20.45H12.2V20.175H12.4062V19.8312H11.7187V20.175H11.8562V20.45H11.5125V19.625H11.7187V19.2812H10.9625V19.625H11.1687V20.45H10.825V20.175H10.9625V19.8312H10.3437Z' fill='#C8B100' />
                <path d='M18.1125 28.2875V24.85H14.5375V28.2875L16.1875 29.0438H16.3937L18.1125 28.2875ZM16.1875 25.125V26.2938L15.0187 25.125H16.1875ZM14.7437 25.1938L16.1187 26.5688L14.7437 27.9438V25.1938ZM14.8812 28.2188L16.1875 26.9125V28.8375L14.8812 28.2188ZM16.3937 28.7688V26.8438L17.7 28.15L16.3937 28.7688ZM17.8375 27.9438L16.4625 26.5688L17.8375 25.1938V27.9438ZM16.3937 25.125H17.5625L16.3937 26.2938V25.125Z' fill='#C8B100' />
                <path d='M12.2 24.0937C12.2 23.0625 12.8875 22.3062 13.7812 22.3062C14.675 22.3062 15.3625 23.1312 15.3625 24.0937C15.3625 25.0562 14.675 25.8812 13.7812 25.8812C12.8875 25.8812 12.2 25.125 12.2 24.0937Z' fill='#ED4C5C' />
                <path d='M12.6812 24.0938C12.6812 23.3375 13.1625 22.7875 13.7812 22.7875C14.4 22.7875 14.8812 23.4063 14.8812 24.0938C14.8812 24.85 14.4 25.4 13.7812 25.4C13.1625 25.4 12.6812 24.85 12.6812 24.0938Z' fill='#005BBF' />
                <path d='M13.3 23.2L13.025 23.9563L13.2312 24.025L13.0937 24.3H13.5062L13.3687 24.025L13.575 23.9563L13.3 23.2Z' fill='#C8B100' />
                <path d='M14.3312 23.2L14.0562 23.9563L14.2625 24.025L14.125 24.3H14.5375L14.4687 24.025L14.675 23.9563L14.3312 23.2Z' fill='#C8B100' />
                <path d='M13.85 24.0938L13.5062 24.85L13.7125 24.9188L13.6437 25.1937H13.9875L13.9187 24.9188L14.125 24.85L13.85 24.0938Z' fill='#C8B100' />
              </svg>
              <span className='no-underline font-bold block text-lg'>España</span>
            </a>
            <button className='no-underline rounded-full p-2 transition-all hover:bg-slate-100'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
                <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
              </svg>
            </button>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex bg-white rounded-2xl p-6 mb-4'>
          <div className='flex flex-row justify-between items-center w-full'>
            <div className='flex flex-row justify-center items-center space-x-3'>
              <div className='relative h-16 w-3 rounded-full bg-slate-100 overflow-hidden'>
                <div className='absolute bg-gradient-to-t from-[#c900db] to-[#ff0ace] bottom-0 left-0 w-full top-[50%]'>
                  <span className='sr-only'>50%</span>
                </div>
              </div>
              <div className='relative h-16 w-3 rounded-full bg-slate-100 overflow-hidden'>
                <div className='absolute bg-gradient-to-t from-[#c900db] to-[#ff0ace] bottom-0 left-0 w-full top-[70%]'>
                  <span className='sr-only'>70%</span>
                </div>
              </div>
              <div className='relative h-16 w-3 rounded-full bg-slate-100 overflow-hidden'>
                <div className='absolute bg-gradient-to-t from-[#c900db] to-[#ff0ace] bottom-0 left-0 w-full top-[45%]'>
                  <span className='sr-only'>45%</span>
                </div>
              </div>
              <div className='relative h-16 w-3 rounded-full bg-slate-100 overflow-hidden'>
                <div className='absolute bg-gradient-to-t from-[#c900db] to-[#ff0ace] bottom-0 left-0 w-full top-[5%]'>
                  <span className='sr-only'>5%</span>
                </div>
              </div>
              <div className='relative h-16 w-3 rounded-full bg-slate-100 overflow-hidden'>
                <div className='absolute bg-gradient-to-t from-[#c900db] to-[#ff0ace] bottom-0 left-0 w-full top-[25%]'>
                  <span className='sr-only'>25%</span>
                </div>
              </div>
              <div className='relative h-16 w-3 rounded-full bg-slate-100 overflow-hidden'>
                <div className='absolute bg-gradient-to-t from-[#c900db] to-[#ff0ace] bottom-0 left-0 w-full top-[15%]'>
                  <span className='sr-only'>15%</span>
                </div>
              </div>
              <div className='relative h-16 w-3 rounded-full bg-slate-100 overflow-hidden'>
                <div className='absolute bg-gradient-to-t from-[#c900db] to-[#ff0ace] bottom-0 left-0 w-full top-[40%]'>
                  <span className='sr-only'>40%</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <span className='font-bold block text-2xl'>88%</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex flex-col bg-white rounded-xl p-4 mb-4'>
          <div className='flex flex-row justify-between items-center w-full'>
            <div className='flex flex-col items-start'>
              <span className='text-sm text-slate-400'>16 January 2017</span>
              <span className='font-bold block mb-1'>Statement of earnings</span>
            </div>
            <span className='font-bold block mb-1'>76%</span>
          </div>
          <div className='-mt-5'>
            <svg width='309' height='63' viewBox='0 0 309 63' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M2 61C4.32346 58.9538 8.85421 55.4069 15.3599 56.2254C23.492 57.2486 28.1389 61 32.7859 56.2254C37.4328 51.4509 40.918 47.3584 44.984 48.0405C49.0501 48.7225 51.9544 52.474 57.1822 51.7919C62.41 51.1098 47.8445 58.7369 71.123 48.0405C94.4014 37.3441 91.867 38.9745 93.1959 42.5838C94.8338 47.0326 99.5854 53.4971 109.46 49.4046C119.335 45.3121 119.567 40.8786 126.305 40.8786C133.043 40.8786 129.209 39.1734 131.533 40.8786C133.856 42.5838 135.018 41.9017 137.922 39.8555C140.827 37.8092 144.992 31.6705 148.477 34.3988C151.962 37.1272 154.768 42.5838 161.738 42.5838C168.708 42.5838 179.954 37.1272 187.506 33.0347C195.057 28.9422 199.494 36.7861 201.237 38.8324C202.979 40.8786 215.758 36.7861 222.729 31.6705C228.305 27.578 233.959 33.6031 236.089 37.1272C243.64 35.6493 260.253 31.8069 266.294 28.2601C272.335 24.7133 275.781 27.9191 276.749 29.9653C282.171 27.578 304.096 10.8671 307 2' stroke='url(#paint0_linear_7_414)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
              <defs>
                <linearGradient id='paint0_linear_7_414' x1='307' y1='0.635821' x2='19.4084' y2='117.088' gradientUnits='userSpaceOnUse'>
                  <stop stop-color='white' />
                  <stop offset='0.0782926' stop-color='#F9F2FF' />
                  <stop offset='0.205255' stop-color='#EB98FF' />
                  <stop offset='0.401455' stop-color='#FF12E7' />
                  <stop offset='0.581288' stop-color='#FF0AAC' />
                  <stop offset='0.729526' stop-color='#FF046E' />
                  <stop offset='0.882474' stop-color='#FFE7E7' />
                  <stop offset='1' stop-color='white' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/** widget */}
        <button type='button' className='break-inside text-center bg-[#1E49E2] rounded-xl p-4 mb-4 w-full'>
          <span className='uppercase font-medium text-white'>Send files now</span>
        </button>

        {/** widget */}
        <div className='flex flex-row justify-between items-center break-inside bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center justify-start space-x-4'>
            <div className='flex flex-row items-center justify-center space-x-4 bg-[#2AB849] w-12 h-12 rounded-full'>
              <svg width='24' height='14' viewBox='0 0 24 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0.33252 8.065L5.98752 13.72L7.39752 12.3L1.74752 6.65L0.33252 8.065ZM22.2465 0.280999L11.6475 10.891L7.41052 6.643L5.98052 8.053L11.6475 13.72L23.6675 1.701L22.2475 0.280999H22.2465ZM18.0095 1.7L16.5995 0.279999L10.2285 6.65L11.6485 8.06L18.0085 1.7H18.0095Z' fill='white' />
              </svg>
            </div>
            <span className='text-lg font-medium'>Complete task</span>
          </div>
          <span className='text-lg font-medium'>76%</span>
        </div>

        {/** widget */}
        <div className='flex flex-row justify-between items-center break-inside bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center justify-start space-x-4'>
            <div className='flex flex-row items-center justify-center space-x-4 bg-[#09C6D2] w-12 h-12 rounded-full'>
              <svg width='24' height='24' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M10 14.0714C9.19475 14.0714 8.40758 13.8326 7.73804 13.3853C7.06849 12.9379 6.54665 12.302 6.23849 11.5581C5.93033 10.8141 5.84971 9.99548 6.0068 9.2057C6.1639 8.41592 6.55167 7.69047 7.12107 7.12107C7.69047 6.55167 8.41592 6.1639 9.2057 6.0068C9.99548 5.84971 10.8141 5.93033 11.5581 6.23849C12.302 6.54665 12.9379 7.06849 13.3853 7.73804C13.8326 8.40758 14.0714 9.19475 14.0714 10C14.0702 11.0794 13.6408 12.1143 12.8775 12.8775C12.1143 13.6408 11.0794 14.0702 10 14.0714ZM10 7.28571C9.46317 7.28571 8.93839 7.4449 8.49202 7.74315C8.04566 8.0414 7.69776 8.46532 7.49233 8.96129C7.28689 9.45726 7.23314 10.003 7.33787 10.5295C7.4426 11.0561 7.70111 11.5397 8.08071 11.9193C8.46031 12.2989 8.94395 12.5574 9.47047 12.6621C9.99699 12.7669 10.5427 12.7131 11.0387 12.5077C11.5347 12.3022 11.9586 11.9543 12.2568 11.508C12.5551 11.0616 12.7143 10.5368 12.7143 10C12.7134 9.2804 12.4271 8.59053 11.9183 8.0817C11.4095 7.57287 10.7196 7.28661 10 7.28571Z' fill='white' />
                <path d='M10 16.7857C9.04546 16.785 8.10177 16.5832 7.2304 16.1936C6.35902 15.8039 5.5795 15.235 4.9426 14.524L5.95368 13.6188C6.55733 14.2938 7.32024 14.8071 8.17295 15.1118C9.02565 15.4166 9.94105 15.5033 10.8358 15.3639C11.7305 15.2245 12.5762 14.8634 13.2958 14.3137C14.0153 13.7639 14.5859 13.0429 14.9556 12.2163C15.3253 11.3897 15.4824 10.4837 15.4125 9.58085C15.3425 8.67801 15.0479 7.80701 14.5553 7.04716C14.0628 6.2873 13.3879 5.66273 12.5923 5.23033C11.7967 4.79792 10.9055 4.57141 10 4.57143V3.21429C11.7997 3.21429 13.5257 3.92921 14.7982 5.20177C16.0708 6.47434 16.7857 8.20032 16.7857 10C16.7857 11.7997 16.0708 13.5257 14.7982 14.7982C13.5257 16.0708 11.7997 16.7857 10 16.7857Z' fill='white' />
                <path d='M10 19.5C8.12108 19.5 6.28435 18.9428 4.72209 17.899C3.15982 16.8551 1.94218 15.3714 1.22315 13.6355C0.504116 11.8996 0.315985 9.98946 0.682544 8.14665C1.0491 6.30383 1.95389 4.61109 3.28249 3.28249C4.61109 1.95389 6.30383 1.0491 8.14665 0.682544C9.98946 0.315985 11.8996 0.504116 13.6355 1.22315C15.3714 1.94218 16.8551 3.15982 17.899 4.72209C18.9428 6.28435 19.5 8.12108 19.5 10C19.4971 12.5187 18.4953 14.9334 16.7143 16.7143C14.9334 18.4953 12.5187 19.4971 10 19.5ZM10 1.85715C8.3895 1.85715 6.81516 2.33472 5.47607 3.22947C4.13699 4.12421 3.0933 5.39595 2.47698 6.88387C1.86067 8.37178 1.69942 10.009 2.01361 11.5886C2.3278 13.1682 3.10334 14.6191 4.24213 15.7579C5.38093 16.8967 6.83185 17.6722 8.41141 17.9864C9.99097 18.3006 11.6282 18.1393 13.1161 17.523C14.604 16.9067 15.8758 15.863 16.7705 14.5239C17.6653 13.1848 18.1429 11.6105 18.1429 10C18.1403 7.84116 17.2816 5.77145 15.7551 4.24491C14.2286 2.71837 12.1589 1.85966 10 1.85715Z' fill='white' />
              </svg>
            </div>
            <span className='text-lg font-medium'>In progress</span>
          </div>
          <span className='text-lg font-medium'>+28</span>
        </div>

        {/** widget */}
        <div className='flex flex-row justify-between items-center break-inside bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center justify-start space-x-4'>
            <div className='flex flex-row items-center justify-center space-x-4 bg-[#D20939] w-12 h-12 rounded-full'>
              <svg width='16' height='20' viewBox='0 0 14 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12.3857 7.11111H10.7143V4.84444C10.7143 2.10839 9.47464 0.5 7 0.5C4.52443 0.5 3.28571 2.10839 3.28571 4.84444V7.11111H1.42857C0.915071 7.11111 0.5 7.72122 0.5 8.2435V15.6111C0.5 16.1296 0.897429 16.6868 1.38307 16.8455L2.49457 17.211C3.08412 17.3858 3.69329 17.4829 4.30714 17.5H9.69286C10.3065 17.4831 10.9154 17.3856 11.5045 17.2101L12.6151 16.8446C13.1016 16.6868 13.5 16.1296 13.5 15.6111V8.2435C13.5 7.72122 12.8983 7.11111 12.3857 7.11111ZM8.85714 7.11111H5.14286V4.46572C5.14286 3.101 5.88293 2.38889 7 2.38889C8.11707 2.38889 8.85714 3.101 8.85714 4.46572V7.11111Z' fill='white' />
              </svg>
            </div>
            <span className='text-lg font-medium'>Blocked up</span>
          </div>
          <button className='inline-flex items-center justify-center p-1 transition-all rounded-full hover:bg-gray-100'>
            <svg className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <button type='button' className='flex break-inside bg-[#D20939] rounded-xl p-4 mb-4 w-full'>
          <div className='flex items-center space-x-4'>
            <svg width='36' height='36' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M5.10714 0C3.75264 0 2.45362 0.538072 1.49585 1.49585C0.538072 2.45362 0 3.75264 0 5.10714V29.4643C0 30.8188 0.538072 32.1178 1.49585 33.0756C2.45362 34.0334 3.75264 34.5714 5.10714 34.5714H18.0714C17.5227 33.8418 17.0607 33.0508 16.6949 32.2143H5.10714C4.3778 32.2143 3.67832 31.9246 3.1626 31.4088C2.64687 30.8931 2.35714 30.1936 2.35714 29.4643V5.10714C2.35714 3.58914 3.58914 2.35714 5.10714 2.35714H29.4643C30.9823 2.35714 32.2143 3.58914 32.2143 5.10714V16.6949C33.0507 17.0602 33.8417 17.5216 34.5714 18.0699V5.10714C34.5714 3.75264 34.0334 2.45362 33.0756 1.49585C32.1178 0.538072 30.8188 0 29.4643 0H5.10714ZM8.64286 10.989C7.60094 10.989 6.60169 11.4029 5.86494 12.1397C5.12819 12.8764 4.71429 13.8757 4.71429 14.9176C4.71429 15.9595 5.12819 16.9587 5.86494 17.6955C6.60169 18.4322 7.60094 18.8461 8.64286 18.8461C9.68478 18.8461 10.684 18.4322 11.4208 17.6955C12.1575 16.9587 12.5714 15.9595 12.5714 14.9176C12.5714 13.8757 12.1575 12.8764 11.4208 12.1397C10.684 11.4029 9.68478 10.989 8.64286 10.989ZM7.07143 14.9176C7.07143 14.5008 7.23699 14.1011 7.53169 13.8064C7.82639 13.5117 8.22609 13.3461 8.64286 13.3461C9.05963 13.3461 9.45933 13.5117 9.75403 13.8064C10.0487 14.1011 10.2143 14.5008 10.2143 14.9176C10.2143 15.3343 10.0487 15.734 9.75403 16.0287C9.45933 16.3234 9.05963 16.489 8.64286 16.489C8.22609 16.489 7.82639 16.3234 7.53169 16.0287C7.23699 15.734 7.07143 15.3343 7.07143 14.9176ZM4.71429 25.9239C4.71429 24.8819 5.12819 23.8827 5.86494 23.1459C6.60169 22.4092 7.60094 21.9953 8.64286 21.9953C9.68478 21.9953 10.684 22.4092 11.4208 23.1459C12.1575 23.8827 12.5714 24.8819 12.5714 25.9239C12.5714 26.9658 12.1575 27.965 11.4208 28.7018C10.684 29.4385 9.68478 29.8524 8.64286 29.8524C7.60094 29.8524 6.60169 29.4385 5.86494 28.7018C5.12819 27.965 4.71429 26.9658 4.71429 25.9239ZM8.64286 24.3524C8.22609 24.3524 7.82639 24.518 7.53169 24.8127C7.23699 25.1074 7.07143 25.5071 7.07143 25.9239C7.07143 26.3406 7.23699 26.7403 7.53169 27.035C7.82639 27.3297 8.22609 27.4953 8.64286 27.4953C9.05963 27.4953 9.45933 27.3297 9.75403 27.035C10.0487 26.7403 10.2143 26.3406 10.2143 25.9239C10.2143 25.5071 10.0487 25.1074 9.75403 24.8127C9.45933 24.518 9.05963 24.3524 8.64286 24.3524ZM15.3214 12.5714C15.0089 12.5714 14.7091 12.6956 14.4881 12.9166C14.267 13.1377 14.1429 13.4374 14.1429 13.75C14.1429 14.0626 14.267 14.3624 14.4881 14.5834C14.7091 14.8044 15.0089 14.9286 15.3214 14.9286H28.6786C28.9912 14.9286 29.2909 14.8044 29.5119 14.5834C29.733 14.3624 29.8571 14.0626 29.8571 13.75C29.8571 13.4374 29.733 13.1377 29.5119 12.9166C29.2909 12.6956 28.9912 12.5714 28.6786 12.5714H15.3214ZM27.5 37.7143C30.209 37.7143 32.807 36.6381 34.7226 34.7226C36.6381 32.807 37.7143 30.209 37.7143 27.5C37.7143 24.791 36.6381 22.193 34.7226 20.2774C32.807 18.3619 30.209 17.2857 27.5 17.2857C24.791 17.2857 22.193 18.3619 20.2774 20.2774C18.3619 22.193 17.2857 24.791 17.2857 27.5C17.2857 30.209 18.3619 32.807 20.2774 34.7226C22.193 36.6381 24.791 37.7143 27.5 37.7143V37.7143ZM27.5 20.4286C27.7084 20.4286 27.9082 20.5114 28.0556 20.6587C28.2029 20.8061 28.2857 21.0059 28.2857 21.2143V26.7143H33.7857C33.9941 26.7143 34.194 26.7971 34.3413 26.9444C34.4887 27.0918 34.5714 27.2916 34.5714 27.5C34.5714 27.7084 34.4887 27.9082 34.3413 28.0556C34.194 28.2029 33.9941 28.2857 33.7857 28.2857H28.2857V33.7857C28.2857 33.9941 28.2029 34.194 28.0556 34.3413C27.9082 34.4887 27.7084 34.5714 27.5 34.5714C27.2916 34.5714 27.0918 34.4887 26.9444 34.3413C26.7971 34.194 26.7143 33.9941 26.7143 33.7857V28.2857H21.2143C21.0059 28.2857 20.8061 28.2029 20.6587 28.0556C20.5114 27.9082 20.4286 27.7084 20.4286 27.5C20.4286 27.2916 20.5114 27.0918 20.6587 26.9444C20.8061 26.7971 21.0059 26.7143 21.2143 26.7143H26.7143V21.2143C26.7143 21.0059 26.7971 20.8061 26.9444 20.6587C27.0918 20.5114 27.2916 20.4286 27.5 20.4286V20.4286ZM5.89286 4.71429C5.58028 4.71429 5.28051 4.83846 5.05948 5.05948C4.83846 5.28051 4.71429 5.58028 4.71429 5.89286C4.71429 6.20543 4.83846 6.50521 5.05948 6.72623C5.28051 6.94726 5.58028 7.07143 5.89286 7.07143H28.6786C28.9912 7.07143 29.2909 6.94726 29.5119 6.72623C29.733 6.50521 29.8571 6.20543 29.8571 5.89286C29.8571 5.58028 29.733 5.28051 29.5119 5.05948C29.2909 4.83846 28.9912 4.71429 28.6786 4.71429H5.89286Z' fill='white' />
            </svg>
            <span className='text-lg font-medium text-white'>Add New Project</span>
          </div>
        </button>

        {/** widget */}
        <button type='button' className='flex break-inside bg-black rounded-3xl px-8 py-4 mb-4 w-full'>
          <div className='flex items-center justify-between flex-1'>
            <span className='text-lg font-medium text-white'>Get started</span>
            <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path fill-rule='evenodd' clip-rule='evenodd' d='M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z' fill='white' />
            </svg>
          </div>
        </button>

        {/** widget */}
        <button type='button' className='flex break-inside bg-black text-white border-2 border-transparent rounded-3xl px-6 py-3 mb-4 w-full'>
          <div className='m-auto'>
            <div className='flex items-center justify-start flex-1 space-x-4'>
              <svg className='text-white' width='26' height='26' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z' />
              </svg>
              <span className='font-medium mb-[-3px]'>Continue with Apple</span>
            </div>
          </div>
        </button>

        {/** widget */}
        <button type='button' className='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full'>
          <div className='m-auto'>
            <div className='flex items-center justify-start flex-1 space-x-4'>
              <svg width='25' height='25' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z' />
              </svg>
              <span className='font-medium mb-[-2px]'>Continue with Google</span>
            </div>
          </div>
        </button>

        {/** widget */}
        <button type='button' className='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full'>
          <div className='m-auto'>
            <div className='flex items-center justify-start flex-1 space-x-4'>
              <svg width='25' height='25' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z' />
              </svg>
              <span className='font-medium mb-[-2px]'>Continue with Facebook</span>
            </div>
          </div>
        </button>

        {/** widget */}
        <button type='button' className='flex break-inside bg-[#2ea44f] text-white border-2 border-transparent rounded-3xl px-6 py-3 mb-4 w-full'>
          <div className='m-auto'>
            <div className='flex items-center justify-start flex-1 space-x-4'>
              <svg width='25' height='25' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
              </svg>
              <span className='font-medium'>Continue with Github</span>
            </div>
          </div>
        </button>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <img class='flex-none w-12 h-12 rounded-full object-cover ring-4 border-2 ring-pink-500' src='https://randomuser.me/api/portraits/men/81.jpg' alt='avatar' />
            <div className='flex-auto'>
              <a href='#' className='no-underline font-bold block'>Robert Fox</a>
              <span className='text-slate-600 text-sm'>Download all information</span>
            </div>
          </div>
          <button className='no-underline inline-block hover:bg-slate-100 rounded-full p-3 transition-all'>
            <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z' fill='currentColor' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4 space-x-4'>
          <div className='flex-1'>
            <div className='no-underline font-bold block '>All your notifications are well turned on</div>
          </div>
          <div className='border-2 border-slate-300 h-8 rounded-sm' />
          <div className='flex items-center justify-center space-x-2'>
            <button className='no-underline inline-block hover:bg-slate-100 rounded-full p-2 transition-all'>
              <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z' fill='currentColor' />
              </svg>
            </button>
            <span className='bg-black flex items-center justify-center rounded-xl text-white px-3'>3</span>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside relative flex items-center justify-between bg-[#7504CD] text-white rounded-xl p-4 mb-4 overflow-hidden'>
          <div className='relative z-10 flex items-center justify-between flex-1'>
            <div className='flex items-center space-x-4'>
              <svg width='32' height='32' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z' fill='currentColor' />
              </svg>
              <div className='no-underline font-medium block text-lg'>Radioactive</div>
            </div>
          </div>
          <div className='absolute h-24 w-24 bg-yellow-200 -right-6 -top-12 rounded-full z-0' />
        </div>

        {/** widget */}
        <div className='flex flex-row justify-between items-center break-inside bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center justify-start space-x-4'>
            <div className='relative flex flex-row items-center justify-center w-[4.5rem] h-[4.5rem] rounded-full'>
              <svg width='100%' height='100%' viewBox='0 0 59 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M56.7593 41.2212C59.6861 34.1467 59.7479 26.2115 56.9317 19.0923C54.1154 11.973 48.6417 6.22754 41.6672 3.06984C34.6927 -0.0878663 26.7638 -0.410408 19.5558 2.17037C12.3479 4.75114 6.42564 10.0331 3.04044 16.9C-0.344766 23.767 -0.927703 31.681 1.4148 38.9699C3.75731 46.2587 8.84175 52.3514 15.5937 55.9604C22.3457 59.5695 30.2364 60.4122 37.5983 58.3105C44.9602 56.2088 51.2166 51.3273 55.0456 44.6976L47.3819 40.2714C44.7016 44.9122 40.3221 48.3293 35.1688 49.8005C30.0155 51.2717 24.492 50.6818 19.7656 48.1554C15.0392 45.6291 11.4801 41.3643 9.84037 36.2621C8.20062 31.1599 8.60867 25.62 10.9783 20.8132C13.348 16.0063 17.4935 12.3089 22.5391 10.5024C27.5847 8.69585 33.1349 8.92163 38.0171 11.132C42.8992 13.3424 46.7308 17.3643 48.7022 22.3477C50.6735 27.3312 50.6303 32.8859 48.5815 37.838L56.7593 41.2212Z' fill='#F2F2F2' />
                <path d='M54.575 30.6546C57.0189 30.6546 59.034 32.6467 58.6688 35.0631C58.1258 38.6557 56.9218 42.13 55.1047 45.3056C52.5522 49.7665 48.8785 53.4832 44.4475 56.0873C40.0165 58.6915 34.9821 60.0929 29.8428 60.1526C24.7036 60.2124 19.6379 58.9284 15.1476 56.4279C10.6573 53.9273 6.89824 50.2971 4.24273 45.8967C1.58722 41.4962 0.127435 36.4784 0.00799284 31.3402C-0.11145 26.202 1.11359 21.1218 3.56176 16.6027C5.30453 13.3858 7.62408 10.5327 10.3922 8.17926C12.2542 6.59631 15.0088 7.26037 16.2957 9.33794C17.5826 11.4155 16.8979 14.1143 15.1415 15.8136C13.6337 17.2724 12.3508 18.9585 11.3432 20.8183C9.62952 23.9816 8.77199 27.5378 8.8556 31.1345C8.93921 34.7313 9.96106 38.2438 11.8199 41.324C13.6788 44.4043 16.3101 46.9455 19.4533 48.6959C22.5966 50.4463 26.1425 51.3451 29.74 51.3032C33.3375 51.2614 36.8616 50.2805 39.9633 48.4575C43.0649 46.6346 45.6365 44.0329 47.4233 40.9103C48.4738 39.0744 49.2316 37.0959 49.6777 35.0459C50.1974 32.6579 52.1312 30.6546 54.575 30.6546Z' fill='url(#paint0_linear_336_22)' />
                <defs>
                  <linearGradient id='paint0_linear_336_22' x1='0' y1='30.6546' x2='59' y2='30.6546' gradientUnits='userSpaceOnUse'>
                    <stop stop-color='#EB3349' />
                    <stop offset='1' stop-color='#F45C43' />
                  </linearGradient>
                </defs>
              </svg>
              <span className='absolute text-md font-bold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>70%</span>
            </div>
            <span className='text-lg font-bold'>Storage</span>
          </div>
          <svg width='35' height='17' viewBox='0 0 35 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M34.11 14.7892L30.19 8.16921L34.07 1.81921C34.1621 1.66789 34.2124 1.49481 34.2157 1.31769C34.2189 1.14056 34.1751 0.965744 34.0886 0.811122C34.0022 0.6565 33.8762 0.527624 33.7236 0.437678C33.5709 0.347733 33.3972 0.299947 33.22 0.29921H2C1.46957 0.29921 0.960859 0.509924 0.585786 0.884996C0.210714 1.26007 0 1.76878 0 2.29921L0 14.2992C0 14.8296 0.210714 15.3384 0.585786 15.7134C0.960859 16.0885 1.46957 16.2992 2 16.2992H33.25C33.4265 16.2992 33.5999 16.2524 33.7524 16.1637C33.905 16.075 34.0314 15.9475 34.1188 15.7941C34.2061 15.6407 34.2513 15.467 34.2498 15.2905C34.2482 15.114 34.2 14.941 34.11 14.7892ZM10.51 11.4792H9.39L6.13 7.13921V11.4892H5V5.29921H6.13L9.4 9.64921V5.29921H10.52L10.51 11.4792ZM16.84 6.29921H13.31V7.78921H16.51V8.78921H13.31V10.3992H16.84V11.3992H12.18V5.29921H16.83L16.84 6.29921ZM25.13 11.4592H24L22.45 6.86921L20.9 11.4792H19.78L17.78 5.29921H19L20.32 9.72921L21.84 5.29921H23.06L24.52 9.72921L25.85 5.29921H27.08L25.13 11.4592Z' fill='black' />
          </svg>
        </div>

        {/* widget */}
        <div className='break-inside flex flex-col justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center justify-between'>
            <span className='text-lg font-bold text-red-500'>7'</span>
            <button className='inline-flex items-center justify-center p-1 transition-all rounded-full hover:bg-gray-100'>
              <svg className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z' />
              </svg>
            </button>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center space-x-3 font-medium'>
              <span>Spain</span>
              <svg width='36' height='36' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0.375 21C0.375 25.0562 1.54375 28.8375 3.5375 32H38.3937C40.3875 28.8375 41.5563 25.0562 41.5563 21C41.5563 16.9437 40.3875 13.1625 38.3937 10H3.5375C1.54375 13.1625 0.375 16.9437 0.375 21Z' fill='#FFCE31' />
                <path d='M38.4625 10C34.8188 4.225 28.3563 0.375 21 0.375C13.6438 0.375 7.18125 4.225 3.5375 10H38.4625Z' fill='#ED4C5C' />
                <path d='M3.5375 32C7.18125 37.775 13.6438 41.625 21 41.625C28.3563 41.625 34.8188 37.775 38.4625 32H3.5375Z' fill='#ED4C5C' />
                <path d='M5.325 18.7313H7.525V19.9688H5.325V18.7313Z' fill='#C8B100' />
                <path d='M5.325 27.8063H7.59375V28.975H5.325V27.8063Z' fill='#C8B100' />
                <path d='M5.11874 25.8813C4.91249 26.0188 4.77499 26.1563 4.77499 26.225C4.77499 26.2938 4.84374 26.3625 4.98124 26.4313C5.11874 26.5 5.25624 26.6375 5.18749 26.775C5.32499 26.6375 5.39374 26.5 5.39374 26.3625C5.39374 26.1563 5.25624 25.95 5.11874 25.8813Z' fill='#ED4C5C' />
                <path d='M5.66875 19.9688H7.25V27.8063H5.66875V19.9688Z' fill='white' />
                <path d='M8.89999 22.8563C8.55624 22.7188 7.93749 22.5812 7.24999 22.5812C7.04374 22.5812 6.76874 22.5813 6.49374 22.65C5.53124 22.7875 4.77499 23.2 4.84374 23.475L4.49999 22.7188C4.43124 22.375 5.25624 21.9625 6.28749 21.7562C6.63124 21.6875 6.97499 21.6875 7.24999 21.6875C7.93749 21.6875 8.55624 21.7562 8.89999 21.8937V22.8563Z' fill='#ED4C5C' />
                <path d='M5.66874 23.8875C5.25624 23.8875 4.91249 23.75 4.91249 23.5438C4.91249 23.4063 5.04999 23.2 5.32499 23.0625H5.73749L5.66874 23.8875Z' fill='#ED4C5C' />
                <path d='M7.25 23.2687C7.525 23.3375 7.73125 23.4062 7.86875 23.475C7.9375 23.5437 7.6625 23.8187 7.25 24.025V23.2687Z' fill='#ED4C5C' />
                <path d='M4.63749 25.4C4.56874 25.2625 5.04999 24.9875 5.66874 24.7813C5.94374 24.7125 6.14999 24.575 6.49374 24.4375C7.31874 24.0938 8.00625 23.6125 7.86875 23.475L8.00624 24.3C8.07499 24.4375 7.52499 24.85 6.69999 25.2625C6.42499 25.4 5.94374 25.6063 5.66874 25.675C5.18749 25.8125 4.77499 26.0875 4.77499 26.1563L4.63749 25.4Z' fill='#ED4C5C' />
                <path d='M20.1063 18.7313H22.3063V19.9688H20.1063V18.7313Z' fill='#C8B100' />
                <path d='M20.0375 27.8063H22.3063V28.975H20.0375V27.8063Z' fill='#C8B100' />
                <path d='M22.5125 25.8813C22.7188 26.0188 22.8563 26.1563 22.8563 26.225C22.8563 26.2938 22.7875 26.3625 22.65 26.4313C22.5125 26.5688 22.375 26.775 22.4438 26.8438C22.3063 26.7063 22.2375 26.5688 22.2375 26.4313C22.2375 26.1563 22.375 25.95 22.5125 25.8813Z' fill='#ED4C5C' />
                <path d='M20.3813 19.9688H21.9625V27.8063H20.3813V19.9688Z' fill='white' />
                <path d='M18.7312 22.8563C19.075 22.7188 19.6937 22.5812 20.3812 22.5812C20.5875 22.5812 20.8625 22.5813 21.1375 22.65C22.1 22.7875 22.8562 23.2 22.7875 23.475L23.1312 22.65C23.2 22.3063 22.375 21.8937 21.3437 21.6875H20.3812C19.6937 21.6875 19.075 21.7562 18.7312 21.8937V22.8563Z' fill='#ED4C5C' />
                <path d='M21.9625 23.8875C22.375 23.8875 22.7188 23.75 22.7188 23.5438C22.7188 23.4063 22.5813 23.2 22.3063 23.0625H21.8938L21.9625 23.8875Z' fill='#ED4C5C' />
                <path d='M20.3812 23.2687C20.1062 23.3375 19.9 23.4062 19.7625 23.475C19.6937 23.5437 19.9687 23.8187 20.3812 24.025V23.2687Z' fill='#ED4C5C' />
                <path d='M22.9938 25.4C23.0625 25.2625 22.5813 24.9875 21.9625 24.7812C21.6875 24.7125 21.4813 24.575 21.1375 24.4375C20.3125 24.0937 19.625 23.6125 19.7625 23.475L19.625 24.3C19.5563 24.4375 20.1062 24.85 20.9312 25.2625C21.2062 25.4 21.6875 25.6062 21.9625 25.675C22.4438 25.8125 22.8562 26.1562 22.7875 26.225L22.9938 25.4Z' fill='#ED4C5C' />
                <path d='M13.7813 14.3312C15.0875 14.3312 17.7688 14.6062 18.7313 15.5687C17.7 18.0437 16.05 17.0125 13.7813 17.0125C11.5813 17.0125 9.8625 18.0437 8.83125 15.5687C9.79375 14.6062 12.4063 14.3312 13.7813 14.3312Z' fill='#ED4C5C' />
                <path d='M17.15 17.0812C16.325 16.6 15.0875 16.5312 13.7813 16.5312C12.475 16.5312 11.2375 16.6687 10.4125 17.0812L10.6875 18.25C11.4438 18.4563 12.5438 18.5938 13.7813 18.6625C15.0188 18.6625 16.05 18.525 16.875 18.25L17.15 17.0812Z' fill='#C8B100' />
                <path d='M18.3188 14.125C18.0438 13.9187 17.4938 13.7125 17.0125 13.7125C16.8063 13.7125 16.6 13.7125 16.3938 13.7812C16.3938 13.7812 15.9813 13.2313 15.0188 13.2313C14.675 13.2313 14.4 13.3 14.125 13.4375V13.3687C14.0563 13.2312 13.9188 13.0938 13.7813 13.0938C13.6438 13.0938 13.4375 13.3 13.4375 13.4375V13.5063C13.1625 13.3688 12.8875 13.3 12.5438 13.3C11.5813 13.3 11.1688 13.9188 11.1688 13.85C10.9625 13.7813 10.7563 13.7812 10.55 13.7812C7.3875 13.7812 8.96875 15.9125 8.96875 15.9125L9.3125 15.5C8.55625 14.5375 9.24375 13.9875 10.6188 13.9875C10.825 13.9875 10.9625 13.9875 11.1 14.0562C10.6188 14.7437 11.5125 15.3625 11.5125 15.3625L11.7188 15.0187C11.2375 14.675 11.1688 13.5063 12.5438 13.5063C12.8875 13.5063 13.1625 13.575 13.4375 13.7812C13.4375 13.85 13.3688 14.8125 13.3 14.95L13.85 15.4312L14.4 14.95C14.3313 14.7438 14.2625 13.85 14.2625 13.7812C14.4688 13.6438 14.8125 13.5063 15.1563 13.5063C16.6 13.5063 16.6 14.675 15.9813 15.0187L16.1875 15.3625C16.1875 15.3625 16.9438 14.7437 16.6 14.0562C16.7375 14.0562 16.9438 13.9875 17.0813 13.9875C18.7313 13.9875 18.8 15.225 18.3875 15.5L18.6625 15.9125C18.525 15.9125 19.2813 14.95 18.3188 14.125Z' fill='#C8B100' />
                <path d='M13.3687 12.8188C13.3687 12.6125 13.575 12.4062 13.7812 12.4062C13.9875 12.4062 14.1937 12.6125 14.1937 12.8188C14.1937 13.025 13.9875 13.2313 13.7812 13.2313C13.575 13.2313 13.3687 13.025 13.3687 12.8188Z' fill='#005BBF' />
                <path d='M13.6437 11.65V11.8562H13.4375V12.0625H13.6437V12.75H13.3687V12.9562H14.1937L14.2625 12.8187L14.1937 12.75H13.9187V12.0625H14.125V11.8562H13.9187V11.65H13.6437Z' fill='#C8B100' />
                <path d='M13.7812 18.4562C12.6812 18.4562 11.7187 18.3187 10.9625 18.1125C11.7187 17.9062 12.6812 17.7687 13.7812 17.7687C14.8812 17.7687 15.8437 17.9062 16.6 18.1125C15.9125 18.3187 14.8812 18.4562 13.7812 18.4562Z' fill='#ED4C5C' />
                <path d='M13.85 30.35C12.5437 30.35 11.3062 30.0063 10.2062 29.525C9.38124 29.1125 8.89999 28.3563 8.89999 27.4625V24.1625H18.8V27.4625C18.8 28.3563 18.25 29.1813 17.4937 29.525C16.3937 30.075 15.1562 30.35 13.85 30.35Z' fill='white' />
                <path d='M13.7813 18.6625L18.7313 18.6625V24.1625H13.7812L13.7813 18.6625Z' fill='white' />
                <path d='M13.85 27.4625C13.85 28.7688 12.75 29.8 11.375 29.8C9.99999 29.8 8.89999 28.7688 8.89999 27.4625V24.1625H13.85V27.4625Z' fill='#ED4C5C' />
                <path d='M9.93126 29.3875C10.0688 29.4562 10.275 29.5937 10.55 29.6625V24.025H10L9.93126 29.3875Z' fill='#C8B100' />
                <path d='M8.83125 27.3937C8.83125 28.0812 9.10625 28.6312 9.38125 28.9062V24.025H8.83125V27.3937Z' fill='#C8B100' />
                <path d='M11.0312 29.8H11.5812V24.025H11.0312V29.8Z' fill='#C7B500' />
                <path d='M12.1313 29.6625C12.3375 29.5937 12.6125 29.4562 12.75 29.3875V24.025H12.2L12.1313 29.6625Z' fill='#C8B100' />
                <path d='M8.83125 18.6625L13.7813 18.6625L13.7812 24.1625H8.83125V18.6625Z' fill='#ED4C5C' />
                <path d='M13.3 28.9062C13.575 28.7 13.7813 28.2188 13.85 27.6688V24.0938H13.3V28.9062Z' fill='#C8B100' />
                <path d='M18.8 24.1625V27.4625C18.8 28.7688 17.7 29.8 16.325 29.8C14.95 29.8 13.85 28.7688 13.85 27.4625V24.1625H18.8Z' fill='#ED4C5C' />
                <path d='M17.0125 19.625C17.2188 20.0375 17.2188 21.0687 16.6 20.8625C16.7375 20.9312 16.8063 21.4125 17.0125 21.6875C17.3563 22.1 17.7688 21.7562 17.7 21.275C17.5625 20.5187 17.6312 20.0375 17.7687 19.2812C17.7687 19.35 18.1125 19.35 18.25 19.2125C18.1812 19.4187 18.1125 19.6937 18.25 19.6937C18.1125 19.9 17.7688 20.2437 17.7 20.45C17.6313 20.9312 18.3875 21.825 17.5625 22.0312C17.0125 22.1687 17.3562 22.5812 17.5625 22.7875C17.5625 22.7875 17.2875 23.6812 17.425 23.6125C16.875 23.8187 17.0125 23.3375 17.0125 23.3375C17.2875 22.5125 16.5313 22.4437 16.6 22.3062C15.9125 22.2375 16.6687 22.925 16.05 22.925C15.9125 22.925 15.6375 23.0625 15.6375 23.0625C14.8812 22.9937 15.2937 22.3062 15.5687 22.375C15.775 22.4437 15.9812 22.7875 15.9812 22.3062C15.9812 22.3062 15.6375 21.7562 16.5312 21.7562C16.1875 21.7562 15.9812 21.4812 15.8437 21.1375C15.7062 21.2062 15.5 21.55 14.7437 21.6187C14.7437 21.6187 14.5375 20.8625 14.7437 21C15.0187 21.1375 15.1562 21.1375 15.4312 20.8625C15.2937 20.6562 14.4687 20.3812 14.6062 19.9C14.6062 19.7625 15.0187 19.5562 15.0187 19.5562C14.95 19.9 15.1562 20.2437 15.5687 20.2437C16.1187 20.3125 15.9125 20.1062 15.9812 19.9687C16.05 19.8312 16.4625 20.0375 16.325 19.6937C16.325 19.625 15.8437 19.5562 15.9812 19.35C16.2562 19.0062 16.6688 19.2812 17.0125 19.625Z' fill='#ED4C5C' />
                <path d='M13.85 29.6625L13.7125 29.3187L13.85 28.9062L13.9875 29.3187L13.85 29.6625Z' fill='#ED4C5C' />
                <path d='M10.3437 19.8312V20.175H10.4812V20.45H10.1375V21.1375H10.3437V22.65H9.93124V23.4062H12.75V22.65H12.4062V21.1375H12.5437V20.45H12.2V20.175H12.4062V19.8312H11.7187V20.175H11.8562V20.45H11.5125V19.625H11.7187V19.2812H10.9625V19.625H11.1687V20.45H10.825V20.175H10.9625V19.8312H10.3437Z' fill='#C8B100' />
                <path d='M18.1125 28.2875V24.85H14.5375V28.2875L16.1875 29.0438H16.3937L18.1125 28.2875ZM16.1875 25.125V26.2938L15.0187 25.125H16.1875ZM14.7437 25.1938L16.1187 26.5688L14.7437 27.9438V25.1938ZM14.8812 28.2188L16.1875 26.9125V28.8375L14.8812 28.2188ZM16.3937 28.7688V26.8438L17.7 28.15L16.3937 28.7688ZM17.8375 27.9438L16.4625 26.5688L17.8375 25.1938V27.9438ZM16.3937 25.125H17.5625L16.3937 26.2938V25.125Z' fill='#C8B100' />
                <path d='M12.2 24.0937C12.2 23.0625 12.8875 22.3062 13.7812 22.3062C14.675 22.3062 15.3625 23.1312 15.3625 24.0937C15.3625 25.0562 14.675 25.8812 13.7812 25.8812C12.8875 25.8812 12.2 25.125 12.2 24.0937Z' fill='#ED4C5C' />
                <path d='M12.6812 24.0938C12.6812 23.3375 13.1625 22.7875 13.7812 22.7875C14.4 22.7875 14.8812 23.4063 14.8812 24.0938C14.8812 24.85 14.4 25.4 13.7812 25.4C13.1625 25.4 12.6812 24.85 12.6812 24.0938Z' fill='#005BBF' />
                <path d='M13.3 23.2L13.025 23.9563L13.2312 24.025L13.0937 24.3H13.5062L13.3687 24.025L13.575 23.9563L13.3 23.2Z' fill='#C8B100' />
                <path d='M14.3312 23.2L14.0562 23.9563L14.2625 24.025L14.125 24.3H14.5375L14.4687 24.025L14.675 23.9563L14.3312 23.2Z' fill='#C8B100' />
                <path d='M13.85 24.0938L13.5062 24.85L13.7125 24.9188L13.6437 25.1937H13.9875L13.9187 24.9188L14.125 24.85L13.85 24.0938Z' fill='#C8B100' />
              </svg>
            </div>
            <div className='flex items-center justify-center space-x-3'>
              <div className='flex items-center justify-between bg-slate-100 rounded-2xl px-4 py-2 font-medium space-x-1'>
                <span>0</span>
                <i>:</i>
                <span>0</span>
              </div>
            </div>
            <div className='flex items-center justify-center space-x-3 font-medium'>
              <svg width='36' height='36' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0.712524 11.6547C0.712524 16.5672 3.86252 20.7297 8.21252 22.2672V1.04216C3.86252 2.57966 0.712524 6.74216 0.712524 11.6547Z' fill='#428BC1' />
                <path d='M23.2125 11.6547C23.2125 6.74216 20.1 2.57966 15.7125 1.04216V22.2672C20.1 20.7297 23.2125 16.5672 23.2125 11.6547Z' fill='#ED4C5C' />
                <path d='M8.21252 22.2672C9.37502 22.6797 10.65 22.9047 11.9625 22.9047C13.275 22.9047 14.55 22.6797 15.7125 22.2672V1.04216C14.55 0.629663 13.3125 0.404663 11.9625 0.404663C10.6125 0.404663 9.37502 0.629663 8.21252 1.04216V22.2672Z' fill='white' />
              </svg>
              <span>France</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <img class='flex-none w-14 h-14 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/84.jpg' alt='avatar' />
            <div className='flex-auto'>
              <a href='#' className='no-underline font-bold text-lg'>Wade warren</a>
              <div className='flex items-center space-x-3'>
                <svg width='37' height='15' viewBox='0 0 33 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M17.0668 3.35155C17.048 4.74459 18.3898 5.52191 19.4005 5.98413C20.439 6.45831 20.7878 6.76242 20.7837 7.18653C20.7759 7.83551 19.9553 8.12195 19.1874 8.13308C17.8477 8.15256 17.0687 7.79365 16.4495 7.52221L15.9668 9.64141C16.5882 9.91007 17.7387 10.1444 18.9317 10.1547C21.7322 10.1547 23.5643 8.85743 23.5742 6.84613C23.5852 4.29351 19.8117 4.15222 19.8375 3.01127C19.8464 2.66531 20.1982 2.29612 20.9691 2.20225C21.3506 2.15483 22.4039 2.11854 23.5981 2.63458L24.0668 0.584212C23.4246 0.36478 22.5992 0.154663 21.5716 0.154663C18.9357 0.154663 17.0818 1.46956 17.0668 3.35155V3.35155ZM28.5705 0.331273C28.0592 0.331273 27.6282 0.611188 27.4359 1.04074L23.4355 10.0041H26.234L26.7908 8.55985H30.2105L30.5335 10.0041H33L30.8477 0.331273H28.5705V0.331273ZM28.962 2.94426L29.7696 6.57649H27.5578L28.962 2.94426V2.94426ZM13.6739 0.331394L11.468 10.0039H14.1347L16.3395 0.331152H13.6739V0.331394ZM9.72894 0.331152L6.95333 6.91496L5.83056 1.31702C5.69882 0.692114 5.17855 0.331273 4.60079 0.331273H0.0635508L0 0.612155C0.931477 0.801829 1.9898 1.10775 2.63098 1.43509C3.02337 1.63504 3.13526 1.80984 3.26416 2.28499L5.39073 10.0041H8.20875L12.5292 0.331273H9.72894' fill='#1518E0' />
                </svg>
                <span className='font-medium'>4293 3242 ••••</span>
              </div>
            </div>
          </div>
          <button className='no-underline inline-block hover:bg-slate-100 rounded-full p-3 transition-all'>
            <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z' fill='currentColor' />
            </svg>
          </button>
        </div>

        {/* widget */}
        <div className='break-inside flex flex-col justify-between bg-white rounded-xl p-4 mb-4 space-y-3'>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <span className='px-2 py-1 rounded-full font-medium bg-green-100 text-sm'>Highlight</span>
              <span className='px-2 py-1 rounded-full font-medium bg-pink-100 text-sm'>Feeds</span>
            </div>
            <button className='inline-flex items-center justify-center p-1 transition-all rounded-full hover:bg-gray-100'>
              <svg className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z' />
              </svg>
            </button>
          </div>
          <div className=''>
            <h5 className='font-bold text-lg'>Dashboard</h5>
            <p className='text-slate-600'>Business management service</p>
          </div>
          <div className='flex justify-between items-center font-bold space-x-4'>
            <div className='relative w-full h-2 bg-slate-100 rounded-md overflow-hidden'>
              <div className='absolute left-0 w-1/3 h-full bg-[#8DD794]' />
            </div>
            <span>80%</span>
          </div>
        </div>

        {/* widget */}
        <div className='break-inside flex flex-row justify-between items-center bg-white rounded-xl p-4 mb-4'>
          working...
        </div>

        {/* widget */}
        <div className='break-inside flex flex-row justify-between items-center bg-white rounded-xl p-4 mb-4'>
          working...
        </div>

        {/** widget */}
        <div className='break-inside flex bg-white rounded-xl p-4 mb-4'>
          <div className='flex flex-row justify-around items-start w-full'>
            <div className='flex flex-col justify-center items-center'>
              <span className='font-bold block'>Jun</span>
              <span className='text-lg font-bold text-pink-500'>23</span>
            </div>
            <div className='border h-full bg-slate-200' />
            <div className='flex flex-col justify-center items-start'>
              <span className='font-bold block mb-1'>Wednesday</span>
              <span className='text-sm text-slate-400'>08:00 PM - 18:30 PM</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='flex flex-col break-inside bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center justify-between mb-3'>
            <div className='flex flex-col items-start justify-center'>
              <a href='#' className='no-underline font-bold block'>New plan started</a>
              <span className='text-slate-600'>Engineering</span>
            </div>
            <a href='#' className='no-underline rounded-full p-2 transition-all hover:bg-slate-100'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
                <path d='m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z' />
              </svg>
            </a>
          </div>
          <div className='col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4'>
            <dt class='sr-only'>Users</dt>
            <dd className='flex justify-start -space-x-1.5'>
              <a href='#' className='inline-block -m-1'>
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white' src='https://randomuser.me/api/portraits/women/46.jpg' alt='avatar' />
              </a>
              <a href='#' className='inline-block -m-1'>
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white' src='https://randomuser.me/api/portraits/men/45.jpg' alt='avatar' />
              </a>
              <a href='#' className='inline-block -m-1'>
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white' src='https://randomuser.me/api/portraits/women/47.jpg' alt='avatar' />
              </a>
              <a href='#' className='inline-block -m-1'>
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white' src='https://randomuser.me/api/portraits/men/48.jpg' alt='avatar' />
              </a>
            </dd>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4 md:space-x-3'>
            <div className='flex-none'>
              <button type='button' className='inline-flex items-center justify-center rounded-full w-12 h-12 bg-cyan-400'>
                <svg className='w-7 h-7' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path className='fill-white' d='M4.79062 2.09314C4.63821 1.98427 4.43774 1.96972 4.27121 2.05542C4.10467 2.14112 4 2.31271 4 2.5V12.5C4 12.6873 4.10467 12.8589 4.27121 12.9446C4.43774 13.0303 4.63821 13.0157 4.79062 12.9069L11.7906 7.90687C11.922 7.81301 12 7.66148 12 7.5C12 7.33853 11.922 7.18699 11.7906 7.09314L4.79062 2.09314Z' fill='black' />
                </svg>
              </button>
            </div>
            <div className='min-w-0 flex-auto'>
              <a href='#' className='no-underline font-bold'>Notion podcast</a>
              <p className='truncate mb-2 text-sm text-slate-600'>Lorem ipsum dolor sit consectetur permi...</p>
              <div class='w-full rounded-full overflow-hidden bg-slate-100 h-2 whitespace-nowrap'>
                <div className='bg-cyan-400 h-full w-1/3'><span className='sr-only'>33%</span></div>
              </div>
            </div>
            <span className='text-slate-600'>30:45</span>
          </div>
        </div>

        {/** widget */}
        <a href='#' className='break-inside flex bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-start space-x-4'>
            <img class='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/50.jpg' alt='avatar' />
            <div className='flex-auto'>
              <h5 className='no-underline font-bold'>Jenny Wilson</h5>
              <p className='text-sm'>lorem ipsum dolor sitIn nisiisnost...</p>
            </div>
          </div>
        </a>

        {/** widget */}
        <a href='#' className='break-inside flex bg-gradient-to-r from-[#ec00d8] to-[#A649EE] rounded-xl p-4 mb-4 text-white'>
          <div className='flex items-start space-x-4'>
            <img class='flex-none w-14 h-14 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/53.jpg' alt='avatar' />
            <div className='flex-auto'>
              <h5 className='no-underline font-bold'>Ana Martinez</h5>
              <p className='text-sm'>lorem ipsum dolor sitIn nisi quis nostrud minim.</p>
            </div>
          </div>
        </a>

        {/** widget */}
        <div className='break-inside flex items-start justify-between bg-yellow-50 rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <img class='flex-none w-12 h-12 rounded-full object-cover' src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='avatar' />
            <div className='flex-auto'>
              <h5 className='font-bold block'>Landescape</h5>
              <h5 className='font-bold block'>423Km</h5>
            </div>
          </div>
          <button className='inline-flex items-center justify-center p-2 transition-all rounded-full hover:bg-yellow-100'>
            <svg className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4'>
          <img class='flex-none w-20 h-20 object-cover' src='https://randomuser.me/api/portraits/women/52.jpg' alt='avatar' />
          <div className='flex-auto'>
            <a href='#' className='no-underline font-bold block text-lg'>Maria</a>
          </div>
          <button className='inline-flex justify-center items-center rounded-full p-3 transition-all hover:bg-slate-100'>
            <svg viewBox='0 0 24 24' className='w-6 h-6'>
              <path fill='fill-slate-900' d='M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4'>
          <img class='flex-none w-20 h-20' src='https://randomuser.me/api/portraits/men/51.jpg' alt='avatar' />
          <div className='flex-auto'>
            <a href='#' className='no-underline font-bold block'>Jhonny</a>
          </div>
          <button className='inline-flex justify-center items-center rounded-md py-2 px-4 font-medium tracking-wide text-sm transition-all bg-violet-500 text-white hover:bg-violet-600 active:bg-violet-700'>Button</button>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <img className='w-10 h-10' src='https://www.svgrepo.com/show/402760/sun-behind-cloud.svg' />
            <div className='flex-auto space-y-1'>
              <h5 className='no-underline font-bold block'>Schedule your day</h5>
              <span className='text-slate-500 text-sm'>November, 22</span>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <button type='button' className='inline-flex items-center justify-center rounded-full w-8 h-8 bg-violet-600'>
              <svg className='w-5 h-5' viewBox='0 0 15 15' fill='none'>
                <path className='fill-white' d='M4.79062 2.09314C4.63821 1.98427 4.43774 1.96972 4.27121 2.05542C4.10467 2.14112 4 2.31271 4 2.5V12.5C4 12.6873 4.10467 12.8589 4.27121 12.9446C4.43774 13.0303 4.63821 13.0157 4.79062 12.9069L11.7906 7.90687C11.922 7.81301 12 7.66148 12 7.5C12 7.33853 11.922 7.18699 11.7906 7.09314L4.79062 2.09314Z' fill='black' />
              </svg>
            </button>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-[#00f5f9] text-black rounded-xl overflow-hidden pr-4 mb-4'>
          <div className='flex flex-1 flex-col p-4'>
            <div className='font-bold block text-lg'> New </div>
            <div className='font-bold block text-lg'> Releases </div>
          </div>
          <img class='flex-none w-24 h-24 object-cover rotate-12 rounded-full -mb-8 -mr-10' src='https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='cover' />
        </div>

        {/** widget */}
        <a href='#' className='break-inside flex items-center justify-center space-x-4 bg-slate-100 rounded-xl overflow-hidden transition-all p-8 mb-4'>
          <svg className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
            <path fill='currentColor' d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' />
          </svg>
          <span className='text-slate-800 font-semibold'>New project</span>
        </a>

        {/** widget */}
        <a href='#' className='break-inside overflow-hidden flex bg-gradient-to-r from-[#EC008C] to-[#FC6767] rounded-full mb-4'>
          <div className='flex-1 items-center relative'>
            <div className='absolute -right-1 top-2'>
              <img class='flex-none w-20 h-20 rounded-2xl object-cover rotate-6' src='https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='avatar' />
            </div>
            <div className='mr-auto px-8 py-4'>
              <h5 className='font-bold text-md text-white'>Best music</h5>
              <h3 className='font-extrabold text-xl text-white'>Summer 2021</h3>
            </div>
          </div>
        </a>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-yellow-100 rounded-full p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <div className='overflow-hidden rounded-full border-2 border-black'>
              <img class='flex-none w-12 h-12 rounded-full object-cover border-2 border-white' src='https://randomuser.me/api/portraits/men/3.jpg' alt='avatar' />
            </div>
            <div className='flex-auto'>
              <a href='#' className='no-underline font-bold block'>Marc Andress</a>
              <span className='text-slate-600 text-sm'>Web designer</span>
            </div>
          </div>
          <button className='no-underline inline-block rounded-full p-2 bg-[#00C1EB] text-white'>
            <svg height='20' width='20' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-transparent rounded-xl p-1 mb-4 border-2 border-dashed border-slate-400'>
          <div className='bg-white rounded-xl w-full p-4 text-center'>
            <span className='font-medium text-slate-500'>Drag image here</span>
          </div>
        </div>

        {/** widget */}
        <div className='relative break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4 overflow-hidden border-2 border-black'>
          <div className='absolute bg-pink-100 top-0 bottom-0 left-0 w-4/6' />
          <div className='flex items-center space-x-4 relative'>
            <img class='flex-none w-24 h-18 rounded-xl object-cover' src='https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='avatar' />
            <div className='flex-auto'>
              <h5 className='text-black text-lg font-bold'>Warning</h5>
              <h5 className='no-underline block text-sm'>Rhemi, Lynn, Lockamy</h5>
            </div>
          </div>
          <div className='flex flex-col items-center relative'>
            <button>
              <svg viewBox='0 0 24 24' height='36' width='36'>
                <path fill='#e600a8' d='M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />
              </svg>
            </button>
          </div>
        </div>

        {/** widget */}
        <div className='relative break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4 overflow-hidden'>
          <div className='absolute bg-cyan-100 top-0 bottom-0 left-0 w-3/5' />
          <div className='flex items-center space-x-4 relative'>
            <img class='flex-none w-24 h-18 rounded-xl object-cover' src='https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg' alt='avatar' />
            <div className='flex-auto'>
              <h5 className='text-black font-bold'>Visions - Purple Disco</h5>
              <h5 className='no-underline block text-sm'>Eli Escobar</h5>
            </div>
          </div>
          <div className='flex flex-col items-center relative'>
            <button className='w-7 h-7 flex justify-center items-center bg-black rounded-full text-white'>
              <svg height='24' width='24' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M8,5.14V19.14L19,12.14L8,5.14Z' />
              </svg>
            </button>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4'>
          <img class='flex-none w-24 h-32 object-cover' src='https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='cover' />
          <div className='flex-auto flex flex-col'>
            <a href='#' className='no-underline font-bold block text-lg'>The Weeknd</a>
            <span className='overflow-ellipsis w-[8.5rem] text-sm overflow-hidden whitespace-nowrap'>Take My Breath Offici..</span>
          </div>
          <button className='w-10 h-10 flex justify-center items-center bg-slate-200 rounded-full text-black'>
            <svg height='24' width='24' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M8,5.14V19.14L19,12.14L8,5.14Z' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside bg-[#503D9C] text-white rounded-xl overflow-hidden p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <div className='flex-auto flex flex-col'>
              <a href='#' className='no-underline font-medium block text-lg'>Mobile App design</a>
              <span className='text-[#D9D3F1]'>Thomas and Niki</span>
            </div>
            <button className='w-10 h-10 flex justify-center items-center rounded-full text-white hover:bg-[#412f8b] transition-all'>
              <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M4.74795 16.875C4.80068 16.875 4.85342 16.8697 4.90615 16.8618L9.34111 16.084C9.39385 16.0734 9.44395 16.0497 9.48086 16.0102L20.6579 4.83311C20.6824 4.80871 20.7017 4.77974 20.715 4.74784C20.7282 4.71594 20.735 4.68175 20.735 4.64722C20.735 4.61268 20.7282 4.57849 20.715 4.54659C20.7017 4.5147 20.6824 4.48572 20.6579 4.46133L16.2757 0.0764649C16.2256 0.0263672 16.1597 0 16.0885 0C16.0173 0 15.9514 0.0263672 15.9013 0.0764649L4.72422 11.2535C4.68467 11.2931 4.66094 11.3405 4.65039 11.3933L3.87256 15.8282C3.84691 15.9695 3.85607 16.1148 3.89926 16.2518C3.94245 16.3887 4.01835 16.513 4.12041 16.614C4.29443 16.7827 4.51328 16.875 4.74795 16.875ZM6.5251 12.2766L16.0885 2.71582L18.0212 4.64853L8.45781 14.2093L6.11377 14.6232L6.5251 12.2766ZM21.1562 19.0898H1.75C1.2833 19.0898 0.90625 19.4669 0.90625 19.9336V20.8828C0.90625 20.9988 1.00117 21.0938 1.11719 21.0938H21.7891C21.9051 21.0938 22 20.9988 22 20.8828V19.9336C22 19.4669 21.6229 19.0898 21.1562 19.0898Z' fill='white' />
              </svg>
            </button>
          </div>
          <div className='flex justify-between flex-row items-center mt-6'>
            <div className='col-start-2 row-start-1 row-end-3'>
              <dt class='sr-only'>Users</dt>
              <dd className='flex justify-start -space-x-1.5'>
                <a href='#' className='inline-block -m-1'>
                  <img class='w-12 h-12 rounded-full bg-slate-100 border-2 border-[#503D9C]' src='https://randomuser.me/api/portraits/women/46.jpg' alt='avatar' />
                </a>
                <a href='#' className='inline-block -m-1'>
                  <img class='w-12 h-12 rounded-full bg-slate-100 border-2 border-[#503D9C]' src='https://randomuser.me/api/portraits/men/45.jpg' alt='avatar' />
                </a>
              </dd>
            </div>
            <span>10.00 AM - 11.00 AM</span>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex rounded-2xl p-4 mb-4 bg-cyan-100'>
          <div className='flex items-start space-x-4'>
            <div className='rounded-full bg-cyan-500 flex items-center justify-center w-10 h-10 text-white'>
              <svg width='24' height='24' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M15.5343 3.45429L13.5043 5.48571C12.5027 4.70607 11.2692 4.28368 10 4.28571C8.73076 4.28368 7.49728 4.70607 6.49571 5.48571L4.46571 3.45429C6.01154 2.14353 7.97327 1.42548 10 1.42857C12.11 1.42857 14.0429 2.19143 15.5343 3.45429ZM16.5457 4.46571C17.8565 6.01154 18.5745 7.97327 18.5714 10C18.5714 12.11 17.8086 14.0429 16.5457 15.5343L14.5143 13.5043C15.2657 12.5357 15.7143 11.32 15.7143 10C15.7143 8.68 15.2657 7.46428 14.5143 6.49571L16.5457 4.46571ZM15.5343 16.5457C13.9885 17.8565 12.0267 18.5745 10 18.5714C7.89 18.5714 5.95714 17.8086 4.46571 16.5457L6.49571 14.5143C7.49728 15.2939 8.73076 15.7163 10 15.7143C11.32 15.7143 12.5357 15.2657 13.5043 14.5143L15.5343 16.5457ZM3.45429 15.5343C2.14353 13.9885 1.42548 12.0267 1.42857 10C1.42857 7.89 2.19143 5.95714 3.45429 4.46571L5.48571 6.49571C4.70607 7.49728 4.28368 8.73076 4.28571 10C4.28571 11.32 4.73429 12.5357 5.48571 13.5043L3.45429 15.5343ZM12.7686 6.72857C12.9497 6.88216 13.1178 7.05034 13.2714 7.23143C13.9043 7.97857 14.2857 8.94571 14.2857 10C14.2869 10.623 14.1517 11.2386 13.8896 11.8038C13.6275 12.3689 13.2449 12.8699 12.7686 13.2714C11.9954 13.9275 11.014 14.2871 10 14.2857C9.37703 14.2869 8.76136 14.1517 8.19621 13.8896C7.63106 13.6275 7.13012 13.2449 6.72857 12.7686C6.09571 12.0214 5.71429 11.0543 5.71429 10C5.71313 9.37703 5.84834 8.76136 6.11043 8.19621C6.37253 7.63106 6.75514 7.13012 7.23143 6.72857C7.97857 6.09571 8.94571 5.71428 10 5.71428C11.0557 5.71428 12.0214 6.09571 12.7686 6.72857ZM10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34783 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34783 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0Z' fill='white' />
              </svg>
            </div>
            <div className='flex-auto'>
              <h5 className='no-underline font-bold'>Quick help</h5>
              <p className='text-sm'>lorem ipsum dolor sitIn nisiisnost...</p>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex rounded-2xl p-4 mb-4 bg-green-100'>
          <div className='flex items-start space-x-4'>
            <div className='rounded-full bg-green-500 flex items-center justify-center w-10 h-10 text-white'>
              <svg width='16' height='20' viewBox='0 0 14 18' fill='none'>
                <path d='M11.235 11.205C11.0075 11.0388 10.6925 10.6538 10.5437 10.47C11.585 9.00875 13.125 6.26125 13.125 2.875C13.125 1.16875 12.4775 0.25 11.375 0.25C10.0275 0.25 7.91 2.0525 7 5.47375C6.09 2.0525 3.9725 0.25 2.625 0.25C1.5225 0.25 0.875 1.16875 0.875 2.875C0.875 6.26125 2.415 9.00875 3.45625 10.47C3.3075 10.6538 2.9925 11.0388 2.765 11.205C2.3275 11.5638 1.3125 12.4038 1.3125 13.8125C1.3125 15.7463 2.87875 17.3125 4.8125 17.3125C6.16875 17.3125 7 16.8225 7 16.8225C7 16.8225 7.83125 17.3125 9.1875 17.3125C11.1213 17.3125 12.6875 15.7463 12.6875 13.8125C12.6875 12.4038 11.6725 11.5638 11.235 11.205ZM4.68125 9.175C3.7975 7.8625 2.625 5.605 2.625 2.875C2.625 2.44625 2.6775 2.175 2.73 2.02625C3.5525 2.2975 5.565 4.3975 5.6875 8.71125C5.27625 8.81625 4.9525 8.97375 4.68125 9.175ZM5.6875 13.1562C5.4425 13.1562 5.25 12.8588 5.25 12.5C5.25 12.1412 5.4425 11.8438 5.6875 11.8438C5.9325 11.8438 6.125 12.1412 6.125 12.5C6.125 12.8588 5.9325 13.1562 5.6875 13.1562ZM7 15.5625C6.51875 15.5625 6.125 14.9325 6.125 14.6875C6.125 14.4425 6.51875 14.25 7 14.25C7.48125 14.25 7.875 14.4425 7.875 14.6875C7.875 14.9325 7.48125 15.5625 7 15.5625ZM8.3125 13.1562C8.0675 13.1562 7.875 12.8588 7.875 12.5C7.875 12.1412 8.0675 11.8438 8.3125 11.8438C8.5575 11.8438 8.75 12.1412 8.75 12.5C8.75 12.8588 8.5575 13.1562 8.3125 13.1562ZM8.3125 8.71125C8.435 4.3975 10.4475 2.2975 11.27 2.02625C11.3225 2.175 11.375 2.44625 11.375 2.875C11.375 5.605 10.2025 7.8625 9.31875 9.175C9.0475 8.97375 8.72375 8.81625 8.3125 8.71125Z' fill='white' />
              </svg>
            </div>
            <div className='flex-auto'>
              <h5 className='no-underline font-bold'>Free giveway</h5>
              <p className='text-sm'>lorem ipsum dolor sitIn nisiisnost...</p>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex rounded-2xl p-4 mb-4 bg-yellow-100'>
          <div className='flex items-start space-x-4'>
            <div className='rounded-full bg-yellow-500 flex items-center justify-center w-10 h-10 text-white'>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M22 19H2V21H22V19M4 15C4 15.5 4.2 16 4.6 16.4C5 16.8 5.5 17 6 17V6C5.5 6 5 6.2 4.6 6.6C4.2 7 4 7.5 4 8V15M13.5 6H10.5C10.5 5.6 10.6 5.2 10.9 4.9C11.2 4.6 11.5 4.5 12 4.5C12.4 4.5 12.8 4.6 13.1 4.9C13.3 5.2 13.5 5.6 13.5 6M7 6V17H17V6H15C15 5.2 14.7 4.5 14.1 3.9S12.8 3 12 3C11.2 3 10.5 3.3 9.9 3.9C9.3 4.5 9 5.2 9 6H7M18 17C18.5 17 19 16.8 19.4 16.4C19.8 16 20 15.5 20 15V8C20 7.5 19.8 7 19.4 6.6C19 6.2 18.5 6 18 6V17Z' fill='currentColor' />
              </svg>
            </div>
            <div className='flex-auto'>
              <h5 className='no-underline font-bold'>Short trip</h5>
              <p className='text-sm'>lorem ipsum dolor sitIn nisiisnost...</p>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside mb-4 relative'>
          <input type='text' className='rounded-full pl-12 pr-9 py-3 bg-white w-full h-12' placeholder='Search' />
          <span className='absolute left-4 top-1/2 -translate-y-1/2'>
            <svg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M17 17.5L13.2223 13.7156L17 17.5ZM15.3158 8.65789C15.3158 10.5563 14.5617 12.3769 13.2193 13.7193C11.8769 15.0617 10.0563 15.8158 8.15789 15.8158C6.2595 15.8158 4.43886 15.0617 3.0965 13.7193C1.75413 12.3769 1 10.5563 1 8.65789C1 6.7595 1.75413 4.93886 3.0965 3.5965C4.43886 2.25413 6.2595 1.5 8.15789 1.5C10.0563 1.5 11.8769 2.25413 13.2193 3.5965C14.5617 4.93886 15.3158 6.7595 15.3158 8.65789V8.65789Z' stroke='#1C262C' stroke-width='2' stroke-linecap='round' />
            </svg>
          </span>
        </div>

        {/** widget */}
        <div className='break-inside mb-4 relative'>
          <span className='absolute left-4 top-1/2 -translate-y-1/2'>
            <svg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M17 17.5L13.2223 13.7156L17 17.5ZM15.3158 8.65789C15.3158 10.5563 14.5617 12.3769 13.2193 13.7193C11.8769 15.0617 10.0563 15.8158 8.15789 15.8158C6.2595 15.8158 4.43886 15.0617 3.0965 13.7193C1.75413 12.3769 1 10.5563 1 8.65789C1 6.7595 1.75413 4.93886 3.0965 3.5965C4.43886 2.25413 6.2595 1.5 8.15789 1.5C10.0563 1.5 11.8769 2.25413 13.2193 3.5965C14.5617 4.93886 15.3158 6.7595 15.3158 8.65789V8.65789Z' stroke='#1C262C' stroke-width='2' stroke-linecap='round' />
            </svg>
          </span>
          <input type='text' className='rounded-full pl-12 pr-16 py-3 bg-white w-full h-12' placeholder='Search' />
          <button className='absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-100 rounded-full'>
            <svg width='22' height='22' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M9 17.375C6.91142 17.375 4.90838 16.5453 3.43153 15.0685C1.95468 13.5916 1.125 11.5886 1.125 9.5C1.125 7.41142 1.95468 5.40838 3.43153 3.93153C4.90838 2.45468 6.91142 1.625 9 1.625C11.0886 1.625 13.0916 2.45468 14.5685 3.93153C16.0453 5.40838 16.875 7.41142 16.875 9.5C16.875 11.5886 16.0453 13.5916 14.5685 15.0685C13.0916 16.5453 11.0886 17.375 9 17.375ZM9 18.5C11.3869 18.5 13.6761 17.5518 15.364 15.864C17.0518 14.1761 18 11.8869 18 9.5C18 7.11305 17.0518 4.82387 15.364 3.13604C13.6761 1.44821 11.3869 0.5 9 0.5C6.61305 0.5 4.32387 1.44821 2.63604 3.13604C0.948212 4.82387 0 7.11305 0 9.5C0 11.8869 0.948212 14.1761 2.63604 15.864C4.32387 17.5518 6.61305 18.5 9 18.5Z' fill='black' />
              <path d='M7.875 13.4375C7.875 13.2883 7.93426 13.1452 8.03975 13.0398C8.14524 12.9343 8.28832 12.875 8.4375 12.875H9.5625C9.71168 12.875 9.85476 12.9343 9.96025 13.0398C10.0657 13.1452 10.125 13.2883 10.125 13.4375C10.125 13.5867 10.0657 13.7298 9.96025 13.8352C9.85476 13.9407 9.71168 14 9.5625 14H8.4375C8.28832 14 8.14524 13.9407 8.03975 13.8352C7.93426 13.7298 7.875 13.5867 7.875 13.4375ZM5.625 10.0625C5.625 9.91332 5.68426 9.77024 5.78975 9.66475C5.89524 9.55926 6.03832 9.5 6.1875 9.5H11.8125C11.9617 9.5 12.1048 9.55926 12.2102 9.66475C12.3157 9.77024 12.375 9.91332 12.375 10.0625C12.375 10.2117 12.3157 10.3548 12.2102 10.4602C12.1048 10.5657 11.9617 10.625 11.8125 10.625H6.1875C6.03832 10.625 5.89524 10.5657 5.78975 10.4602C5.68426 10.3548 5.625 10.2117 5.625 10.0625ZM3.375 6.6875C3.375 6.53832 3.43426 6.39524 3.53975 6.28975C3.64524 6.18426 3.78832 6.125 3.9375 6.125H14.0625C14.2117 6.125 14.3548 6.18426 14.4602 6.28975C14.5657 6.39524 14.625 6.53832 14.625 6.6875C14.625 6.83668 14.5657 6.97976 14.4602 7.08525C14.3548 7.19074 14.2117 7.25 14.0625 7.25H3.9375C3.78832 7.25 3.64524 7.19074 3.53975 7.08525C3.43426 6.97976 3.375 6.83668 3.375 6.6875Z' fill='black' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside mb-4 relative'>
          <span className='absolute left-4 top-1/2 -translate-y-1/2'>
            <svg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M17 17.5L13.2223 13.7156L17 17.5ZM15.3158 8.65789C15.3158 10.5563 14.5617 12.3769 13.2193 13.7193C11.8769 15.0617 10.0563 15.8158 8.15789 15.8158C6.2595 15.8158 4.43886 15.0617 3.0965 13.7193C1.75413 12.3769 1 10.5563 1 8.65789C1 6.7595 1.75413 4.93886 3.0965 3.5965C4.43886 2.25413 6.2595 1.5 8.15789 1.5C10.0563 1.5 11.8769 2.25413 13.2193 3.5965C14.5617 4.93886 15.3158 6.7595 15.3158 8.65789V8.65789Z' stroke='#1C262C' stroke-width='2' stroke-linecap='round' />
            </svg>
          </span>
          <input type='text' className='rounded-full pl-12 pr-16 py-3 bg-white w-full h-12' placeholder='Search' />
          <button className='absolute right-5 top-1/2 -translate-y-1/2'>
            <svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M5.9375 2.90216C5.62256 2.90216 5.32051 3.02854 5.09781 3.25351C4.87511 3.47848 4.75 3.78361 4.75 4.10176C4.75 4.41992 4.87511 4.72504 5.09781 4.95001C5.32051 5.17498 5.62256 5.30137 5.9375 5.30137C6.25244 5.30137 6.55449 5.17498 6.77719 4.95001C6.99989 4.72504 7.125 4.41992 7.125 4.10176C7.125 3.78361 6.99989 3.47848 6.77719 3.25351C6.55449 3.02854 6.25244 2.90216 5.9375 2.90216ZM2.57688 2.90216C2.82221 2.19975 3.27719 1.5915 3.87909 1.16127C4.48098 0.731039 5.20017 0.5 5.9375 0.5C6.67483 0.5 7.39402 0.731039 7.99591 1.16127C8.59781 1.5915 9.05278 2.19975 9.29813 2.90216H17.8125C18.1274 2.90216 18.4295 3.02854 18.6522 3.25351C18.8749 3.47848 19 3.78361 19 4.10176C19 4.41992 18.8749 4.72504 18.6522 4.95001C18.4295 5.17498 18.1274 5.30137 17.8125 5.30137H9.29813C9.05278 6.00378 8.59781 6.61202 7.99591 7.04226C7.39402 7.47249 6.67483 7.70353 5.9375 7.70353C5.20017 7.70353 4.48098 7.47249 3.87909 7.04226C3.27719 6.61202 2.82221 6.00378 2.57688 5.30137H1.1875C0.872555 5.30137 0.57051 5.17498 0.347811 4.95001C0.125111 4.72504 0 4.41992 0 4.10176C0 3.78361 0.125111 3.47848 0.347811 3.25351C0.57051 3.02854 0.872555 2.90216 1.1875 2.90216H2.57688ZM13.0625 13.6986C12.7476 13.6986 12.4455 13.825 12.2228 14.05C12.0001 14.275 11.875 14.5801 11.875 14.8982C11.875 15.2164 12.0001 15.5215 12.2228 15.7465C12.4455 15.9715 12.7476 16.0978 13.0625 16.0978C13.3774 16.0978 13.6795 15.9715 13.9022 15.7465C14.1249 15.5215 14.25 15.2164 14.25 14.8982C14.25 14.5801 14.1249 14.275 13.9022 14.05C13.6795 13.825 13.3774 13.6986 13.0625 13.6986ZM9.70187 13.6986C9.94722 12.9962 10.4022 12.388 11.0041 11.9577C11.606 11.5275 12.3252 11.2965 13.0625 11.2965C13.7998 11.2965 14.519 11.5275 15.1209 11.9577C15.7228 12.388 16.1778 12.9962 16.4231 13.6986H17.8125C18.1274 13.6986 18.4295 13.825 18.6522 14.05C18.8749 14.275 19 14.5801 19 14.8982C19 15.2164 18.8749 15.5215 18.6522 15.7465C18.4295 15.9715 18.1274 16.0978 17.8125 16.0978H16.4231C16.1778 16.8003 15.7228 17.4085 15.1209 17.8387C14.519 18.269 13.7998 18.5 13.0625 18.5C12.3252 18.5 11.606 18.269 11.0041 17.8387C10.4022 17.4085 9.94722 16.8003 9.70187 16.0978H1.1875C0.872555 16.0978 0.57051 15.9715 0.347811 15.7465C0.125111 15.5215 0 15.2164 0 14.8982C0 14.5801 0.125111 14.275 0.347811 14.05C0.57051 13.825 0.872555 13.6986 1.1875 13.6986H9.70187Z' fill='black' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside mb-4 relative'>
          <span className='absolute left-4 top-1/2 -translate-y-1/2'>
            <svg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M17 17.5L13.2223 13.7156L17 17.5ZM15.3158 8.65789C15.3158 10.5563 14.5617 12.3769 13.2193 13.7193C11.8769 15.0617 10.0563 15.8158 8.15789 15.8158C6.2595 15.8158 4.43886 15.0617 3.0965 13.7193C1.75413 12.3769 1 10.5563 1 8.65789C1 6.7595 1.75413 4.93886 3.0965 3.5965C4.43886 2.25413 6.2595 1.5 8.15789 1.5C10.0563 1.5 11.8769 2.25413 13.2193 3.5965C14.5617 4.93886 15.3158 6.7595 15.3158 8.65789V8.65789Z' stroke='#1C262C' stroke-width='2' stroke-linecap='round' />
            </svg>
          </span>
          <input type='text' className='rounded-full pl-12 pr-16 py-3 bg-white w-full h-12' placeholder='Search' />
          <button className='absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-yellow-300 rounded-full'>
            <svg width='22' height='22' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M9 17.375C6.91142 17.375 4.90838 16.5453 3.43153 15.0685C1.95468 13.5916 1.125 11.5886 1.125 9.5C1.125 7.41142 1.95468 5.40838 3.43153 3.93153C4.90838 2.45468 6.91142 1.625 9 1.625C11.0886 1.625 13.0916 2.45468 14.5685 3.93153C16.0453 5.40838 16.875 7.41142 16.875 9.5C16.875 11.5886 16.0453 13.5916 14.5685 15.0685C13.0916 16.5453 11.0886 17.375 9 17.375ZM9 18.5C11.3869 18.5 13.6761 17.5518 15.364 15.864C17.0518 14.1761 18 11.8869 18 9.5C18 7.11305 17.0518 4.82387 15.364 3.13604C13.6761 1.44821 11.3869 0.5 9 0.5C6.61305 0.5 4.32387 1.44821 2.63604 3.13604C0.948212 4.82387 0 7.11305 0 9.5C0 11.8869 0.948212 14.1761 2.63604 15.864C4.32387 17.5518 6.61305 18.5 9 18.5Z' fill='black' />
              <path d='M7.875 13.4375C7.875 13.2883 7.93426 13.1452 8.03975 13.0398C8.14524 12.9343 8.28832 12.875 8.4375 12.875H9.5625C9.71168 12.875 9.85476 12.9343 9.96025 13.0398C10.0657 13.1452 10.125 13.2883 10.125 13.4375C10.125 13.5867 10.0657 13.7298 9.96025 13.8352C9.85476 13.9407 9.71168 14 9.5625 14H8.4375C8.28832 14 8.14524 13.9407 8.03975 13.8352C7.93426 13.7298 7.875 13.5867 7.875 13.4375ZM5.625 10.0625C5.625 9.91332 5.68426 9.77024 5.78975 9.66475C5.89524 9.55926 6.03832 9.5 6.1875 9.5H11.8125C11.9617 9.5 12.1048 9.55926 12.2102 9.66475C12.3157 9.77024 12.375 9.91332 12.375 10.0625C12.375 10.2117 12.3157 10.3548 12.2102 10.4602C12.1048 10.5657 11.9617 10.625 11.8125 10.625H6.1875C6.03832 10.625 5.89524 10.5657 5.78975 10.4602C5.68426 10.3548 5.625 10.2117 5.625 10.0625ZM3.375 6.6875C3.375 6.53832 3.43426 6.39524 3.53975 6.28975C3.64524 6.18426 3.78832 6.125 3.9375 6.125H14.0625C14.2117 6.125 14.3548 6.18426 14.4602 6.28975C14.5657 6.39524 14.625 6.53832 14.625 6.6875C14.625 6.83668 14.5657 6.97976 14.4602 7.08525C14.3548 7.19074 14.2117 7.25 14.0625 7.25H3.9375C3.78832 7.25 3.64524 7.19074 3.53975 7.08525C3.43426 6.97976 3.375 6.83668 3.375 6.6875Z' fill='black' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside mb-4 relative'>
          <input type='text' className='rounded-full pl-5 pr-16 py-3 bg-white w-full h-12' placeholder='Phone number' />
          <button className='absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-green-200 rounded-xl'>
            <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M10.5948 4.89827L10.3934 4.70676C9.8948 4.18966 9.98111 3.95027 10.4702 3.46191L13.0784 0.828574C13.8551 0.0433618 13.999 -0.330093 14.7373 0.368938L14.9387 0.560453L10.5948 4.89827ZM11.103 5.32918L15.3223 1.11585C15.9935 2.01597 17.5661 4.43863 16.7894 6.2293C16.0894 7.82845 15.7442 7.90506 14.8716 9.10203C13.0976 11.1225 10.8633 13.2866 9.11808 14.9145C7.90985 15.7859 7.8619 16.1881 6.24133 16.8297C4.51529 17.5095 2.02211 15.9774 1.08237 15.3358L5.3016 11.1225L6.43312 12.6738C6.75915 13.1143 7.58382 12.6163 8.15917 12.0418C9.15644 11.0363 11.2085 8.99669 11.9948 8.14445C12.5606 7.57948 13.0688 6.75597 12.6277 6.42082L11.103 5.32918ZM0.535789 14.9528L0.334416 14.7517C-0.317646 14.0431 0.0563309 13.8899 0.833052 13.1238L3.46048 10.5192C3.94953 10.05 4.17967 9.94469 4.6783 10.4139L4.87009 10.615L0.535789 14.9528Z' fill='black' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside flex justify-between items-center mb-4 bg-white rounded-full p-3 relative'>
          <div className='flex items-center space-x-2'>
            <img className='w-9 h-9 rounded-full' src='https://avatars.githubusercontent.com/u/35234895?v=4' alt='frankuxui' />
            <a href='#' className='font-medium'>@frankuxui</a>
          </div>
          <div className='border-2 border-slate-300 h-4 rounded-sm' />
          <div className='flex items-center space-x-2 justify-between'>
            <span>12 Followers</span>
            <svg width='22' height='22' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z' />
            </svg>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex justify-between items-center mb-4 bg-white rounded-full px-4 py-3 relative'>
          <div className='flex items-center justify-around w-full'>
            <div className='flex items-center justify-center space-x-2'>
              <svg width='20' height='20' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' />
              </svg>
              <div className='font-bold text-sm bg-blue-100 text-blue-600 rounded-md py-[3px] px-1'>04:32</div>
            </div>
            <div className='font-medium text-sm flex-1 justify-center items-center flex space-x-6'>
              <div className='border-2 border-slate-300 h-4 rounded-sm' />
              <span>Installation...</span>
              <div className='border-2 border-slate-300 h-4 rounded-sm' />
            </div>
            <div className='flex justify-center items-center'>
              <svg width='22' height='22' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M9,9H15V15H9' />
              </svg>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center justify-center flex-none w-12 h-12 rounded-full bg-[#DDFBFF]'>
              <svg className='text-slate-800' width='22' height='22' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z' />
              </svg>
            </div>
            <div className='flex-auto'>
              <h5 className='font-bold block'>Apple store</h5>
              <h5 className='block text-sm'>16 January - 3:25 PM</h5>
            </div>
          </div>
          <div className='inline-flex flex-col items-center space-y-1'>
            <span className='font-bold'>-$327.68</span>
            <svg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M0.700422 0.500001H13.3008C13.4284 0.500268 13.5534 0.523766 13.6625 0.567966C13.7715 0.612164 13.8605 0.675391 13.9197 0.750839C13.979 0.826288 14.0063 0.911102 13.9988 0.996151C13.9912 1.0812 13.9491 1.16326 13.8769 1.23351L7.57672 7.31101C7.31561 7.563 6.68699 7.563 6.42518 7.31101L0.125005 1.23351C0.0520805 1.16341 0.00931579 1.08131 0.00135729 0.996115C-0.00660121 0.910924 0.0205509 0.825906 0.0798637 0.750297C0.139176 0.674689 0.228381 0.611381 0.337786 0.567254C0.447191 0.523126 0.572612 0.499866 0.700422 0.500001Z' fill='#E31414' />
            </svg>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <svg className='text-slate-800' width='22' height='22' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z' />
            </svg>
            <div className='flex-auto'>
              <h5 className='font-bold block'>Unlimited</h5>
            </div>
          </div>
          <div className='inline-flex flex-col items-center space-y-1'>
            <svg width='98' height='26' viewBox='0 0 88 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M82.9613 6.40709L84.8427 10.9549H84.8648L86.7017 6.40692H88L84.0397 15.5359H82.8077L84.2818 12.3424L81.6745 6.40692L82.9613 6.40709ZM78.693 6.19788C79.573 6.19788 80.2658 6.42911 80.772 6.90257C81.2782 7.37621 81.5312 8.01483 81.5312 8.84081V12.75H80.3978V11.8691H80.3431C79.8481 12.5958 79.1988 12.9592 78.3845 12.9592C77.6916 12.9592 77.1085 12.75 76.6356 12.3426C76.1623 11.9242 75.9313 11.4067 75.9313 10.7899C75.9313 10.1401 76.1735 9.61156 76.6796 9.22601C77.1746 8.84064 77.8346 8.64244 78.6596 8.64244C79.3636 8.64244 79.9468 8.77474 80.409 9.02782V8.75255C80.409 8.33414 80.244 7.99281 79.914 7.69552C79.584 7.40907 79.1988 7.26593 78.7588 7.26593C78.0988 7.26593 77.5708 7.5412 77.1855 8.10292L76.1405 7.44227C76.7125 6.61629 77.571 6.19788 78.693 6.19788ZM72.686 3.47788C73.4891 3.47788 74.1713 3.74214 74.7321 4.28184C75.3041 4.82137 75.5793 5.471 75.5793 6.23092C75.5793 7.01268 75.2931 7.6735 74.7321 8.191C74.1819 8.71969 73.5001 8.98395 72.686 8.98395H70.7278V12.739H69.5394V3.47788H72.686ZM78.8468 9.57853C78.3628 9.57853 77.9668 9.69965 77.6365 9.93087C77.3175 10.1731 77.1525 10.4596 77.1525 10.8009C77.1525 11.1092 77.2845 11.3735 77.5485 11.5716C77.8125 11.781 78.1205 11.8801 78.4725 11.8801C78.9676 11.8801 79.4188 11.6929 79.8148 11.3296C80.2108 10.955 80.3978 10.5256 80.3978 10.019C80.024 9.72167 79.5068 9.57853 78.8468 9.57853ZM72.7186 4.63401H70.7276V7.86068H72.7186C73.192 7.86068 73.588 7.70653 73.896 7.38722C74.2151 7.06791 74.3689 6.69337 74.3689 6.25294C74.3689 5.82352 74.2151 5.44898 73.896 5.12967C73.588 4.79935 73.192 4.63401 72.7186 4.63401ZM52.7512 6.2089C53.5542 6.2089 54.1925 6.56124 54.5227 6.95763H54.5774V6.40709H55.9857V12.4637C55.9857 14.9525 54.5227 15.9766 52.7845 15.9766C51.156 15.9766 50.177 14.8754 49.8029 13.9833L51.0902 13.4438C51.321 13.9944 51.8822 14.6442 52.7845 14.6442C53.8955 14.6442 54.5774 13.9503 54.5774 12.6619V12.1774H54.5227C54.1925 12.5848 53.5542 12.9482 52.7512 12.9482C51.068 12.9482 49.528 11.4836 49.528 9.58954C49.528 7.68451 51.068 6.2089 52.7512 6.2089ZM62.4328 6.21991C64.1821 6.21991 65.0291 7.60743 65.3151 8.36718L65.4691 8.75255L60.9696 10.6137C61.3106 11.2855 61.8496 11.6379 62.5976 11.6379C63.3461 11.6159 63.8741 11.2525 64.2589 10.6908L65.4029 11.4615C65.0291 12.0123 64.1379 12.9593 62.5976 12.9593C60.6834 12.9593 59.2644 11.4837 59.2644 9.58954C59.2644 7.58524 60.7056 6.21991 62.4328 6.21991ZM29.4953 2.48692C31.0903 2.48692 32.2235 3.11453 33.0707 3.9295L32.0585 4.94249C31.4425 4.36993 30.6173 3.91849 29.4842 3.91849C27.383 3.91849 25.7328 5.61431 25.7328 7.71771C25.7328 9.82094 27.372 11.5168 29.4842 11.5168C30.8483 11.5168 31.6295 10.9662 32.1245 10.4707C32.5317 10.0632 32.7957 9.47961 32.9057 8.67565H29.4513V7.24425H34.2918C34.3468 7.49733 34.3688 7.8058 34.3688 8.13612C34.3688 9.20434 34.0718 10.5366 33.1365 11.4837C32.2125 12.4418 31.0465 12.9483 29.4953 12.9483C26.613 12.9483 24.1926 10.6027 24.1926 7.71771C24.1926 4.83255 26.6128 2.48692 29.4953 2.48692ZM38.2417 6.2089C40.101 6.2089 41.619 7.62945 41.619 9.57853C41.619 11.5168 40.101 12.9482 38.2417 12.9482C36.3825 12.9482 34.8644 11.5168 34.8644 9.57853C34.8644 7.62928 36.3825 6.2089 38.2417 6.2089ZM45.5902 6.2089C47.4494 6.2089 48.9676 7.62945 48.9676 9.57853C48.9676 11.5168 47.4494 12.9482 45.5902 12.9482C43.7309 12.9482 42.2125 11.5168 42.2125 9.57853C42.2125 7.62928 43.7309 6.2089 45.5902 6.2089ZM58.5274 2.83926V12.7391H57.0532V2.83926H58.5274ZM38.2527 7.5412C37.2407 7.5412 36.3604 8.36718 36.3604 9.57853C36.3604 10.7789 37.2407 11.6159 38.2527 11.6159C39.2649 11.6159 40.145 10.7789 40.145 9.57853C40.145 8.36735 39.2649 7.5412 38.2527 7.5412ZM45.5902 7.5412C44.5779 7.5412 43.6979 8.36718 43.6979 9.57853C43.6979 10.7789 44.5779 11.6159 45.5902 11.6159C46.6022 11.6159 47.4822 10.7789 47.4822 9.57853C47.4822 8.36735 46.6022 7.5412 45.5902 7.5412ZM52.8942 7.53036C51.8712 7.53036 51.0242 8.40021 51.0242 9.58971C51.0242 10.7679 51.8822 11.6159 52.8942 11.6159C53.8955 11.6159 54.6876 10.7679 54.6876 9.58954C54.6876 8.40021 53.8955 7.53036 52.8942 7.53036ZM62.4768 7.50834C61.7288 7.50834 60.6834 8.17999 60.7274 9.47943L63.7309 8.22404C63.5659 7.80563 63.0709 7.50834 62.4768 7.50834Z' fill='#5F6368' />
              <path d='M16.3905 2.99892C14.6104 1.97044 12.3343 2.58154 11.3058 4.36322L8.71272 8.85956C7.96248 10.1578 8.92842 10.6115 10.0054 11.2578L12.5005 12.6996C13.3454 13.1873 14.4246 12.8976 14.9119 12.053L17.5777 7.43229C18.4732 5.87961 17.9417 3.89543 16.3905 2.99892Z' fill='#EA4335' />
              <path d='M13.4565 4.85991L10.9615 3.41836C9.58412 2.65311 8.80415 2.60236 8.23868 3.50214L4.55884 9.88132C3.53103 11.662 4.1429 13.9391 5.92181 14.9655C7.47298 15.8619 9.45539 15.3299 10.351 13.7772L14.1013 7.2747C14.5908 6.42894 14.3014 5.34765 13.4565 4.85991Z' fill='#FBBC04' />
              <path d='M12.1842 0.567262C10.2458 -0.552394 7.76723 0.111692 6.6485 2.05217L3.31172 7.83625C2.81878 8.68958 3.11148 9.78206 3.96415 10.2744L5.92679 11.4086C6.896 11.9692 8.1347 11.6365 8.69467 10.6664L12.5067 4.05819C13.2965 2.68924 15.0446 2.22008 16.412 3.01079L12.1842 0.567262Z' fill='#34A853' />
              <path d='M7.12253 3.70687L5.22795 2.6144C4.38301 2.12786 3.30381 2.41621 2.81654 3.25973L0.543667 7.19109C-0.575239 9.12606 0.0881985 11.6014 2.02643 12.7183L5.97698 14.9955C4.62948 14.0926 4.20151 12.2832 5.02548 10.8584L7.76929 6.11324C8.25535 5.27195 7.96643 4.19358 7.12253 3.70687Z' fill='#4285F4' />
            </svg>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex flex-col justify-between bg-white space-y-2 rounded-xl p-4 mb-4'>
          <div className='flex flex-row items-center justify-between'>
            <span className='font-bold block text-sm'>Transaction</span>
            <span className='font-bold block text-sm'>$8.347 / $23.892</span>
          </div>
          <div>
            <div className='relative w-full h-2 bg-slate-100 rounded-md overflow-hidden'>
              <div className='absolute left-0 w-1/3 h-full bg-pink-500' />
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside relative overflow-hidden flex flex-col justify-between bg-white space-y-2 rounded-xl p-4 mb-4'>
          <div className='flex flex-row items-center space-x-2'>
            <svg width='38' height='38' viewBox='0 0 24 24'>
              <path fill='#1ED760' d='M17.9,10.9C14.7,9 9.35,8.8 6.3,9.75C5.8,9.9 5.3,9.6 5.15,9.15C5,8.65 5.3,8.15 5.75,8C9.3,6.95 15.15,7.15 18.85,9.35C19.3,9.6 19.45,10.2 19.2,10.65C18.95,11 18.35,11.15 17.9,10.9M17.8,13.7C17.55,14.05 17.1,14.2 16.75,13.95C14.05,12.3 9.95,11.8 6.8,12.8C6.4,12.9 5.95,12.7 5.85,12.3C5.75,11.9 5.95,11.45 6.35,11.35C10,10.25 14.5,10.8 17.6,12.7C17.9,12.85 18.05,13.35 17.8,13.7M16.6,16.45C16.4,16.75 16.05,16.85 15.75,16.65C13.4,15.2 10.45,14.9 6.95,15.7C6.6,15.8 6.3,15.55 6.2,15.25C6.1,14.9 6.35,14.6 6.65,14.5C10.45,13.65 13.75,14 16.35,15.6C16.7,15.75 16.75,16.15 16.6,16.45M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />
            </svg>
            <span className='font-bold block'>Enjoy songs</span>
          </div>
          <div className='absolute -right-4 -top-4 rounded-full w-24 h-24 bg-green-100' />
        </div>

        {/** widget */}
        <div className='break-inside flex flex-col justify-between bg-white space-y-2 rounded-xl p-4 mb-4'>
          <div className='flex flex-row items-center space-x-2'>
            <svg width='39' height='33' viewBox='0 0 39 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M35.4205 6.38339C31.5739 4.17693 26.655 5.488 24.432 9.3104L18.8285 18.9556C17.2071 21.7409 19.2945 22.7141 21.622 24.1009L27.0139 27.1931C28.8399 28.2397 31.1721 27.6184 32.2253 25.8065L37.9859 15.894C39.9209 12.5632 38.7727 8.30632 35.4205 6.38339Z' fill='#EA4335' />
              <path d='M29.08 10.3756L23.6881 7.28332C20.7116 5.64149 19.0259 5.5328 17.804 7.46285L9.85147 21.1479C7.63091 24.9677 8.95264 29.853 12.797 32.0547C16.1492 33.9776 20.4334 32.8367 22.3686 29.5058L30.4733 15.5562C31.5312 13.7419 30.906 11.4221 29.08 10.3756Z' fill='#FBBC04' />
              <path d='M26.3306 1.16712C22.1417 -1.23522 16.7852 0.189227 14.3674 4.35161L7.15666 16.7608C6.09162 18.5917 6.724 20.9352 8.5666 21.991L12.8079 24.4242C14.9023 25.6268 17.5793 24.9132 18.7895 22.8321L27.0272 8.65569C28.7342 5.71945 32.512 4.7131 35.467 6.40927L26.3306 1.16712Z' fill='#34A853' />
              <path d='M15.3918 7.9023L11.2978 5.55884C9.47198 4.51465 7.13975 5.13347 6.0866 6.94318L1.17458 15.3766C-1.24312 19.5272 0.190437 24.8377 4.37943 27.2332L12.9169 32.1182C10.0046 30.1812 9.0797 26.2999 10.8603 23.2431L16.7897 13.0638C17.8405 11.2589 17.2153 8.94649 15.3918 7.9023Z' fill='#4285F4' />
            </svg>
            <span className='font-bold block text-lg'>Media component</span>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center justify-center flex-none w-12 h-12 rounded-full bg-black'>
              <svg width='24' height='10' viewBox='0 0 24 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M23.9999 0.7995L6.44194 8.2755C4.98594 8.8915 3.76294 9.2005 2.77394 9.2005C1.65394 9.2005 0.840936 8.8085 0.336936 8.0235C0.0199359 7.5195 -0.0730641 6.8805 0.0569359 6.1055C0.186936 5.3305 0.532936 4.5055 1.09294 3.6275C1.55994 2.9175 2.32494 1.9845 3.38994 0.827499C3.0287 1.39617 2.76381 2.02056 2.60594 2.6755C2.32594 3.8705 2.57794 4.7475 3.36194 5.3075C3.73494 5.5685 4.24794 5.6995 4.90194 5.6995C5.42394 5.6995 6.01194 5.6155 6.66594 5.4475L23.9999 0.7995Z' fill='white' />
              </svg>
            </div>
            <div className='flex-auto'>
              <h5 className='font-bold block'>Nike store</h5>
              <h5 className='block text-sm'>6 months of promotions</h5>
            </div>
          </div>
          <div className='inline-flex flex-col items-center space-y-1'>
            <span className='font-bold'>-27.50 €</span>
            <span className='text-sm'>11:00AM</span>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <img class='flex-none w-12 h-12 rounded-full object-cover' src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='avatar' />
            <div className='flex-auto space-y-1'>
              <span className='text-slate-600'>Mountains</span>
              <h5 className='no-underline font-bold block'>423Km, 3 Week</h5>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img className='w-8 h-8' src='https://www.svgrepo.com/show/287721/cloudy-sun-rays.svg' />
          </div>
        </div>

        {/** widget */}
        <div className='break-inside bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center'>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/402760/sun-behind-cloud.svg' />
              <span className='no-underline font-bold block text-sm'>Mon</span>
            </div>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/400800/sunraincloud.svg' />
              <span className='no-underline font-bold block text-sm'>Tue</span>
            </div>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/402760/sun-behind-cloud.svg' />
              <span className='no-underline font-bold block text-sm'>Wed</span>
            </div>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/400797/sunbehindcloud.svg' />
              <span className='no-underline font-bold block text-sm'>Thu</span>
            </div>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/402761/sun-behind-small-cloud.svg' />
              <span className='no-underline font-bold block text-sm'>Fri</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <a href='#' className='break-inside flex flex-row items-center justify-between bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-xl p-4 mb-4'>
          <div className='mr-auto'>
            <h3 className='font-bold text-xl text-white'>Seatle</h3>
            <h5 className='text-white'>Cloudy</h5>
          </div>
          <span className='text-4xl font-bold text-white'>32°</span>
          <svg className='w-10 h-10 ml-auto' viewBox='0 0 36 36' preserveAspectRatio='xMidYMid meet'><path className='fill-[#FFE600]' d='M14 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm16 12s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 14s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm3.872-7.957s1.414 1.414 0 2.828s-2.828 0-2.828 0L3.629 7.458s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm19.085 2.828s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414z' /><circle className='fill-[#FFE600]' cx='16' cy='16' r='9' /><path className='fill-white stroke' d='M28 20c-.825 0-1.62.125-2.369.357A6.498 6.498 0 0 0 19.5 16c-3.044 0-5.592 2.096-6.299 4.921A4.459 4.459 0 0 0 10.5 20A4.5 4.5 0 0 0 6 24.5c0 .604.123 1.178.339 1.704A4.98 4.98 0 0 0 5 26c-2.762 0-5 2.238-5 5s2.238 5 5 5h23a8 8 0 1 0 0-16z' /></svg>
        </a>

        {/** widget */}
        <div className='break-inside flex flex-col bg-white rounded-xl p-4 mb-4'>
          <div className='flex justify-between items-start mb-4'>
            <div className='flex-auto'>
              <a href='#' className='no-underline font-bold block'>Great day to schedule</a>
              <span className='text-slate-600'>Your usual hours</span>
            </div>
            <button className='items-center justify-center'>
              <svg className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z' />
              </svg>
            </button>
          </div>
          <div className='flex items-center'>
            <div className='flex-auto text-center space-y-1 p-2'>
              <img className='w-6 h-6 m-auto' src='https://www.svgrepo.com/show/402760/sun-behind-cloud.svg' />
              <span className='text-sm font-bold block'>Mon</span>
              <span className='text-xs font-normal'>02:27 PM</span>
            </div>
            <div className='flex-auto text-center space-y-1 rounded-md bg-blue-50 p-2'>
              <img className='w-6 h-6 m-auto' src='https://www.svgrepo.com/show/400800/sunraincloud.svg' />
              <span className='text-sm font-bold block'>Tue</span>
              <span className='text-xs font-normal'>06:00 AM</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <img className='w-6 h-6 m-auto' src='https://www.svgrepo.com/show/402760/sun-behind-cloud.svg' />
              <span className='text-sm font-bold block'>Wed</span>
              <span className='text-xs font-normal'>07:30 PM</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <img className='w-6 h-6 m-auto' src='https://www.svgrepo.com/show/400797/sunbehindcloud.svg' />
              <span className='text-sm font-bold block'>Thu</span>
              <span className='text-xs font-normal'>12:00 PM</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <img className='w-6 h-6 m-auto' src='https://www.svgrepo.com/show/402761/sun-behind-small-cloud.svg' />
              <span className='text-sm font-bold block'>Fri</span>
              <span className='text-xs font-normal'>04:00 PM</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-start space-x-4'>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between items-center'>
                <h5 className='no-underline font-bold text-lg text-purple-600'>Figma Shot</h5>
                <button className='inline-flex items-center justify-center p-1 transition-all rounded-full hover:bg-gray-100'>
                  <svg className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
                    <path fill='currentColor' d='M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z' />
                  </svg>
                </button>
              </div>
              <p className='mr-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</p>
              <div className='my-3'>
                <div className='relative w-full cursor-pointer'>
                  <span className='absolute left-[33%] bg-purple-500 rounded-full w-4 h-4 z-10 top-1/2 -translate-y-1/2' />
                  <div className='relative w-full h-2 bg-slate-100 rounded-md overflow-hidden'>
                    <div className='absolute left-0 w-1/3 h-full bg-purple-500' />
                  </div>
                </div>
              </div>
              <div className='flex flex-row justify-between items-center mt-1'>
                <div className='flex flex-row justify-start items-center'>
                  <svg className='text-slate-800 mr-2' height='18' width='18' viewBox='0 0 24 24'>
                    <path fill='currentColor' d='M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19V7Z' />
                  </svg>
                  <span className='text-sm text-[#556878]'>Wed 23, 06:30 PM, 2022</span>
                </div>
                <span className='font-bold'>26%</span>
              </div>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='relative break-inside flex items-center justify-between rounded-xl mb-4 gap-4'>
          <div className='text-center space-y-1 px-2 py-6 flex-1 rounded-3xl bg-white'>
            <span className='text-sm font-bold block'>Mon</span>
            <span className='text-xs font-normal'>10</span>
          </div>
          <div className='text-center space-y-1 px-2 py-6 flex-1 rounded-3xl bg-pink-500 text-white'>
            <span className='text-sm font-bold block'>Tue</span>
            <span className='text-xs font-normal'>11</span>
          </div>
          <div className='text-center space-y-1 px-2 py-6 flex-1 rounded-3xl bg-white'>
            <span className='text-sm font-bold block'>Wed</span>
            <span className='text-xs font-normal'>12</span>
          </div>
          <div className='text-center space-y-1 px-2 py-6 flex-1 rounded-3xl bg-white'>
            <span className='text-sm font-bold block'>Thu</span>
            <span className='text-xs font-normal'>13</span>
          </div>
          <div className='text-center space-y-1 px-2 py-6 flex-1 rounded-3xl bg-white'>
            <span className='text-sm font-bold block'>Fri</span>
            <span className='text-xs font-normal'>14</span>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4'>
          <img class='flex-none w-24 h-24 object-cover' src='https://randomuser.me/api/portraits/men/42.jpg' alt='avatar' />
          <div className='flex rounded-3xl bg-slate-200 p-2 w-full justify-between'>
            <div className='flex items-center justify-center bg-white p-2 rounded-full'>
              <button>
                <svg width='20' height='20' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z' />
                </svg>
              </button>
            </div>
            <div className='flex items-center justify-center bg-white p-2 rounded-full'>
              <button>
                <svg width='20' height='20' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17S8 16.11 8 15 8.9 13 10 13M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.9 2 10V20C2 21.1 2.9 22 4 22H16C17.1 22 18 21.1 18 20V10C18 8.9 17.1 8 16 8H15V6C15 4.34 16.34 3 18 3S21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M16 10V20H4V10H16Z' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4'>
          <img class='flex-none w-28 h-full object-cover' src='https://images.pexels.com/photos/343701/pexels-photo-343701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='avatar' />
          <div className='flex-auto flex justify-between items-start'>
            <div className='flex flex-col'>
              <span className='font-bold text-md mb-2'>
                Pirates of the
                <br />
                caribbean
              </span>
              <small className='text-md text-gray-600'>2022 · Action · Runtime · 2h 5m</small>
            </div>
            <div className='flex justify-center items-center'>
              <svg viewBox='0 0 24 24' className='mr-2' width='22' height='22'>
                <path fill='#ff00ea' d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z' />
              </svg>
              <span className='font-bold'>4.95</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex flex-col bg-white rounded-xl p-4 mb-4'>
          <div className='flex justify-between items-center mb-4'>
            <div className='flex-auto'>
              <button type='button' className='py-1 px-4 font-bold block text-md hover:bg-slate-100 rounded-md'>July 2022</button>
            </div>
            <div className='justify-center items-center'>
              <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
                <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' />
                </svg>
              </button>
              <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
                <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex items-center'>
            <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
              <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' />
              </svg>
            </button>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>Mon</span>
              <span className='text-xs font-normal'>1</span>
            </div>
            <div className='flex-auto text-center space-y-1 rounded-md bg-[#11C0A1] text-white p-2'>
              <span className='text-sm font-bold block'>Tue</span>
              <span className='text-xs font-normal'>2</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>Wed</span>
              <span className='text-xs font-normal'>3</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>Thu</span>
              <span className='text-xs font-normal'>4</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>Fri</span>
              <span className='text-xs font-normal'>5</span>
            </div>
            <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
              <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
              </svg>
            </button>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex flex-col bg-white rounded-xl p-4 mb-4'>
          <div className='flex justify-between items-center mb-4'>
            <div className='flex-auto'>
              <button type='button' className='py-1 px-4 font-bold block text-md hover:bg-slate-100 rounded-md'>Saturday 02</button>
            </div>
            <div className='justify-center items-center'>
              <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
                <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' />
                </svg>
              </button>
              <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
                <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex items-center'>
            <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
              <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' />
              </svg>
            </button>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>2020</span>
            </div>
            <div className='flex-auto text-center space-y-1 rounded-md bg-[#11C0A1] text-white p-2'>
              <span className='text-sm font-bold block'>2021</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>2022</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>2023</span>
            </div>
            <div className='flex-auto text-center space-y-1 p-2'>
              <span className='text-sm font-bold block'>2024</span>
            </div>
            <button className='items-center justify-center hover:bg-slate-100 rounded-md'>
              <svg width='34' height='34' className='text-slate-800' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
              </svg>
            </button>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-start space-x-4'>
            <svg width='50' height='50' viewBox='0 0 1024 1024' fill='#232f3e'>
              <circle cx='512' cy='512' r='512' />
              <path fill='white' d='M400.3 479.1c0 6.3.7 11.4 1.9 15.1 1.4 3.8 3.1 7.9 5.5 12.3.9 1.3 1.2 2.7 1.2 3.9 0 1.7-1 3.4-3.2 5.1l-10.7 7.1c-1.3.9-2.8 1.5-4.4 1.5-1.7 0-3.4-.9-5.1-2.4-2.3-2.5-4.3-5.1-6.1-8-1.9-3.3-3.7-6.6-5.3-10-13.3 15.7-30 23.5-50.1 23.5-14.3 0-25.7-4.1-34-12.2-8.3-8.2-12.6-19.1-12.6-32.7 0-14.5 5.1-26.2 15.5-35.1 10.4-8.9 24.2-13.3 41.7-13.3 5.8 0 11.8.5 18 1.4 6.3.9 12.8 2.2 19.6 3.8v-12.4c0-12.9-2.7-22-8-27.2-5.4-5.3-14.6-7.8-27.7-7.8-6 0-12.1.7-18.4 2.2s-12.4 3.4-18.4 5.8c-1.9.9-3.9 1.6-6 2.2-.9.3-1.8.4-2.7.5-2.4 0-3.6-1.7-3.6-5.3v-8.3c0-2.7.3-4.8 1.2-6 1.3-1.5 2.9-2.8 4.8-3.6 6-3.1 13.1-5.6 21.4-7.7 8.7-2.2 17.6-3.3 26.6-3.2 20.3 0 35.1 4.6 44.6 13.8 9.4 9.2 14.1 23.1 14.1 41.9v55.2l.2-.1zM331.2 505c5.6 0 11.4-1 17.5-3.1 6.1-2 11.6-5.8 16.2-10.9 2.7-3.2 4.8-6.8 5.8-10.9 1-4.1 1.7-9 1.7-14.8v-7.1c-5.2-1.3-10.4-2.2-15.7-2.9-5.3-.7-10.7-1-16-1-11.4 0-19.8 2.2-25.4 6.8-5.6 4.6-8.3 11.1-8.3 19.6 0 8 2 14 6.3 18 4.1 4.3 10 6.3 17.9 6.3zm136.7 18.4c-3.1 0-5.1-.5-6.5-1.7-1.4-1-2.6-3.4-3.6-6.6l-40-131.6c-.8-2.2-1.3-4.5-1.5-6.8 0-2.7 1.4-4.3 4.1-4.3h16.7c3.2 0 5.4.5 6.6 1.7 1.4 1 2.4 3.4 3.4 6.7l28.6 112.7 26.6-112.7c.9-3.4 1.9-5.6 3.2-6.7 2-1.3 4.4-1.9 6.8-1.7H526c3.2 0 5.5.5 6.8 1.7 1.3 1 2.6 3.4 3.2 6.7l26.9 114.1 29.5-114.1c1-3.4 2.2-5.6 3.4-6.7 2-1.3 4.3-1.9 6.6-1.7h15.9c2.7 0 4.3 1.4 4.3 4.3 0 .9-.2 1.7-.4 2.7-.3 1.5-.7 2.9-1.2 4.3l-41 131.6c-1 3.4-2.2 5.6-3.6 6.6-1.9 1.2-4.2 1.8-6.5 1.7h-14.7c-3.2 0-5.4-.5-6.8-1.7-1.3-1.2-2.5-3.4-3.2-6.8l-26.4-109.8L492.6 515c-.9 3.4-1.9 5.6-3.2 6.8-1.4 1.2-3.8 1.7-6.8 1.7l-14.7-.1zm218.8 4.6c-8.9 0-17.7-1-26.2-3.1-8.5-2-15.1-4.3-19.6-6.8-2.7-1.5-4.6-3.2-5.3-4.8-.7-1.5-1-3.1-1-4.8v-8.7c0-3.6 1.4-5.3 3.9-5.3 1 0 2 .2 3.1.5 1 .3 2.6 1 4.3 1.7 5.8 2.6 12.1 4.6 18.7 6 6.8 1.4 13.4 2 20.3 2 10.7 0 19.1-1.9 24.9-5.6 5.6-3.4 9-9.6 8.9-16.2.1-4.4-1.5-8.7-4.6-11.9-3.1-3.2-8.9-6.1-17.2-8.9l-24.7-7.7c-12.4-3.9-21.6-9.7-27.2-17.3-5.5-7.1-8.5-15.8-8.5-24.7 0-7.1 1.6-13.4 4.6-18.9 3.1-5.4 7.1-10.2 12.3-14 5.1-3.9 10.9-6.8 17.7-8.9 6.8-2 14-2.9 21.5-2.9 3.7 0 7.7.2 11.4.7 3.9.5 7.5 1.2 11.1 1.9 3.4.9 6.7 1.7 9.7 2.7 3.1 1 5.5 2 7.2 3.1 2 1 3.8 2.5 5.1 4.3 1.1 1.7 1.6 3.6 1.5 5.6v8c0 3.6-1.4 5.5-3.9 5.5-2.3-.3-4.5-1-6.5-2-10.3-4.5-21.4-6.8-32.7-6.6-9.7 0-17.4 1.5-22.7 4.8-5.3 3.2-8 8.2-8 15.1 0 4.8 1.7 8.9 5.1 12.1 3.4 3.2 9.7 6.5 18.7 9.4l24.2 7.6c12.2 3.9 21.1 9.4 26.4 16.4 5.3 7 7.8 15 7.8 23.8 0 7.3-1.5 14-4.4 19.8-3.1 5.8-7.2 10.9-12.4 15-5.3 4.3-11.6 7.3-18.9 9.5-7.9 2.4-15.9 3.6-24.6 3.6zm32.2 82.7c-56 41.4-137.4 63.3-207.4 63.3-98.1 0-186.5-36.3-253.2-96.6-5.3-4.8-.5-11.2 5.8-7.5 72.2 41.9 161.3 67.3 253.4 67.3 62.2 0 130.4-12.9 193.3-39.5 9.3-4.2 17.3 6.2 8.1 13zm23.3-26.5c-7.2-9.2-47.4-4.4-65.6-2.2-5.4.7-6.3-4.1-1.3-7.7 32-22.5 84.6-16 90.8-8.5 6.1 7.7-1.7 60.3-31.7 85.5-4.6 3.9-9 1.9-7-3.2 6.8-16.9 22-54.9 14.8-63.9z' />
            </svg>
            <div className='flex-auto'>
              <h5 className='no-underline font-bold text-lg mb-2'>Amazon</h5>
              <div className='flex items-center'>
                <span className='mr-2 p-1 bg-slate-200 rounded-md'>
                  <svg width='16' height='16' viewBox='0 0 24 24'>
                    <path fill='#333' d='M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z' />
                  </svg>
                </span>
                <span className='mr-1 text-sm'>Last view july 23</span>
                <span>
                  <svg width='18' height='18' viewBox='0 0 24 24' className='mr-1'>
                    <path fill='#333' d='M20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5V20H4V13.5C4 9.91 6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8Z' />
                  </svg>
                </span>
                <span className='text-slate-400 text-sm'>03:12 PM</span>
              </div>
              <div className='mt-1'>
                <a href='#' className='text-blue-500 text-sm font-medium inline-flex items-center'>
                  If was not you?, click here
                  <svg width='20' height='20' viewBox='0 0 24 24' className='ml-2'>
                    <path fill='currentColor' d='M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
