import React from "react";

function LoginMainReview() {

    return (
        <div class="p-4 sm:w-1/2 lg:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-60 md:h-48 w-full object-cover object-center"
                    src="https://picsum.photos/id/188/720/400" alt="blog"/>
                <div class="p-6">
                    
                    <h1 class="text-2xl font-semibold mb-3">가성비가 좋았어요</h1>
                    <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                        fuga! Dolores quisquam eius cum accusamus?</p>
                    <div class="flex items-center flex-wrap ">
                        <a class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">자세히 보기
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginMainReview;