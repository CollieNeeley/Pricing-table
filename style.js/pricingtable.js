document.querySelectorAll('.plan').forEach(plan => {
    plan.addEventListener('click', function () {
        document.querySelectorAll('.plan').forEach(p =>
            p.classList.remove('highlighted'));
        this.classList.add('highlighted');
    });
    plan.addEventListener('mouseover', function () {
        const detailsId = 'details-' + this.id;
        document.getElementById(detail - sId).classList.add('show');
    });
    plan.addEventListener('mouseout', function () {
        const detailsId = 'details-' + this.id;
        document.getElementById(detail - sId).classList.remove('show');
    });
});
