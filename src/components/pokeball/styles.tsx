import styled from 'styled-components';

export const Box = styled.div`
    svg.fetching g.gravity {
        animation: shake 0.75s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes shake {
        20% {
            transform: rotate(-10deg);
        }
        60% {
            transform: rotate(10deg);
        }
        80% {
            transform: rotate(0deg);
        }
    }

    svg.fetching g.inner {
        animation: pulse 0.75s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes pulse {
        25% {
            opacity: 0.7;
        }
        50% {
            opacity: 0;
        }
    }

    svg.success g.ball {
        animation: squash 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 2 alternate;
    }

    @keyframes squash {
        to {
            transform: scaleY(0.9);
        }
    }

    svg.success g.stars {
        animation: scaleUp 0.2s 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    @keyframes scaleUp {
        to {
            transform: scale(1);
        }
    }

    svg.failure g.open {
        animation: scaleUp 0.2s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    svg.failure g.top {
        animation: translateUp 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    @keyframes translateUp {
        to {
            transform: translateY(-10px);
        }
    }

    svg.failure g.bottom {
        animation: translateDown 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    @keyframes translateDown {
        to {
            transform: translateY(5px);
        }
    }

    svg.failure g.center {
        animation: translateHigher 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    @keyframes translateHigher {
        to {
            transform: translateY(-18px);
        }
    }

`