$(document).ready(function() {
    // 漢堡選單開關功能
    $('.navbar-toggler').on('click', function() {
        $('.navbar-collapse').toggleClass('show');
    });

    // 下拉選單開關功能 (手機版點擊，桌面版 hover)
    $('.dropdown-toggle').on('click', function(e) {
        // 阻止預設連結跳轉
        e.preventDefault(); 
        
        // 檢查是否是小螢幕模式 (可以根據 Media Query 的斷點來判斷)
        // 這裡我們簡單判斷螢幕寬度
        if ($(window).width() <= 767) {
            // 如果是小螢幕，切換 .active 類來顯示/隱藏下拉選單
            $(this).parent('.dropdown').toggleClass('active');
        } 
        // 桌面版通常是 hover 觸發，所以這裡不做額外處理
    });

    // 點擊頁面其他地方關閉下拉選單 (僅在手機模式下點擊觸發)
    $(document).on('click', function(e) {
        if ($(window).width() <= 767) {
            // 點擊非下拉選單區域時關閉下拉選單
            if (!$(e.target).closest('.dropdown').length && $('.dropdown.active').length) {
                $('.dropdown').removeClass('active');
            }
            // 點擊漢堡選單外部，但不是漢堡選單本身時關閉主選單
            if (!$(e.target).closest('.navbar-toggler').length && !$(e.target).closest('.navbar-collapse').length && $('.navbar-collapse').hasClass('show')) {
                 $('.navbar-collapse').removeClass('show');
            }
        }
    });

    // 監聽視窗大小改變，如果從小螢幕變回大螢幕，移除 .show 類和 .active 類
    $(window).on('resize', function() {
        if ($(window).width() > 767) {
            $('.navbar-collapse').removeClass('show');
            $('.dropdown').removeClass('active'); // 確保下拉選單也關閉
        }
    });
});