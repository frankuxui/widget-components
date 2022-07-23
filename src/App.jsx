import './App.css'

function App () {
  return (
    <div className='App pt-16'>

      {/** container widgets */}
      <div className='box-border mx-4 max-w-full sm:columns-2 md:columns-2 lg:columns-4 xl:columns-5 gap-4'>

        {/** widget */}
        <div className='break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4'>
          <div className='flex items-center space-x-4'>
            <img class='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/44.jpg' alt='avatar' />
            <div className='flex-auto'>
              <a href='#' className='no-underline font-bold block'>Yolanda</a>
              <span className='text-slate-600'>Web Development</span>
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
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4'>
          <img class='flex-none w-24 h-24 object-cover' src='https://randomuser.me/api/portraits/women/45.jpg' alt='avatar' />
          <div className='flex-auto'>
            <a href='#' className='no-underline font-bold block'>Julia Robert</a>
            <span className='text-slate-600'>Frontend Development</span>
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
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white' src='https://randomuser.me/api/portraits/women/46.jpg' alt='avatar' />
              </a>
              <a href='#' className='inline-block -m-1'>
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white' src='https://randomuser.me/api/portraits/men/45.jpg' alt='avatar' />
              </a>
              <a href='#' className='inline-block -m-1'>
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white' src='https://randomuser.me/api/portraits/women/47.jpg' alt='avatar' />
              </a>
              <a href='#' className='inline-block -m-1'>
                <img class='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white' src='https://randomuser.me/api/portraits/men/48.jpg' alt='avatar' />
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
            <img class='flex-none w-14 h-14 rounded-full object-cover' src='https://randomuser.me/api/portraits/women/50.jpg' alt='avatar' />
            <div className='flex-auto'>
              <h5 className='no-underline font-bold'>Jenny Wilson</h5>
              <p>lorem ipsum dolor sitIn nisi quis nostr minima.</p>
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
            <a href='#' className='no-underline font-bold block text-xl'>Maria</a>
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
              <span className='text-slate-500'>November, 22</span>
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
        <a href='#' className='break-inside flex items-center justify-center space-x-4 bg-slate-100 rounded-xl overflow-hidden transition-all p-8 mb-4'>
          <svg className='w-8 h-8 text-slate-800' viewBox='0 0 24 24'>
            <path fill='currentColor' d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' />
          </svg>
          <span className='text-slate-800 font-semibold'>New project</span>
        </a>

        {/** widget */}
        <a href='#' className='break-inside overflow-hidden flex bg-gradient-to-r from-[#EC008C] to-[#FC6767] rounded-xl mb-4'>
          <div className='flex-1 items-center relative'>
            <div className='absolute -right-3 -top-1'>
              <img class='flex-none w-24 h-24 rounded-2xl object-cover rotate-6' src='https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='avatar' />
            </div>
            <div className='mr-auto p-4'>
              <h5 className='font-bold text-lg text-white'>Best music</h5>
              <h3 className='font-extrabold text-xl text-white'>Summer 2021</h3>
            </div>
          </div>
        </a>

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
              <span className='no-underline font-bold block'>Mon</span>
            </div>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/400800/sunraincloud.svg' />
              <span className='no-underline font-bold block'>Tue</span>
            </div>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/402760/sun-behind-cloud.svg' />
              <span className='no-underline font-bold block'>Wed</span>
            </div>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/400797/sunbehindcloud.svg' />
              <span className='no-underline font-bold block'>Thu</span>
            </div>
            <div className='flex-auto text-center space-y-1'>
              <img className='w-8 h-8 m-auto' src='https://www.svgrepo.com/show/402761/sun-behind-small-cloud.svg' />
              <span className='no-underline font-bold block'>Fri</span>
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
        <div className='break-inside flex items-center justify-between bg-[#ff7300] text-white rounded-xl overflow-hidden pr-4 mb-4'>
          <div className='flex flex-1 flex-col p-6'>
            <div className='font-bold block text-2xl'> Creadores </div>
            <div className='font-bold block text-2xl'> de Tendencias </div>
          </div>
          <img class='flex-none w-26 h-26 object-cover rotate-12 rounded-lg -mb-10 -mr-6' src='https://randomuser.me/api/portraits/women/58.jpg' alt='avatar' />
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4'>
          <img class='flex-none w-36 h-36 object-cover' src='https://images.pexels.com/photos/343701/pexels-photo-343701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='avatar' />
          <div className='flex-auto p-5 flex justify-between items-start'>
            <div className='flex flex-col'>
              <span className='font-bold text-2xl mb-3'>
                Pirates of the
                <br />
                caribbean
              </span>
              <small className='text-md text-gray-600'>2022 · Action · Runtime · 2h 5m</small>
            </div>
            <div className='flex justify-center items-center'>
              <svg viewBox='0 0 24 24' className='w-6 h-6 mr-2'>
                <path fill='#ff00ea' d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z' />
              </svg>
              <span className='font-bold text-lg'>4,95</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
