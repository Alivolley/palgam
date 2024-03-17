import styled from '@emotion/styled';

const Tab3Style = styled.div(({ activeAnimation }) => ({
   '#iconBlock': {
      animation: `fade 5s linear infinite`,
   },
   '#wrapper': {
      overflowY: 'scroll',
      scrollSnapType: 'y mandatory',
      '::-webkit-scrollbar': {
         width: '0',
         height: '0',
      },
      maskImage: 'linear-gradient(black, transparent)',
   },
   '#wrapperBlock': {
      scrollSnapAlign: 'start',
   },

   '#shadow1': {
      animation: activeAnimation && `fadeShadow1 0.5s linear forwards 2.5s`,
   },

   '#shadow2': {
      animation: activeAnimation && `fadeShadow2 0.5s linear forwards 2s`,
   },

   '#shadow3': {
      animation: activeAnimation && `fadeShadow3 0.5s linear forwards 1.5s`,
   },

   '#shadow4': {
      animation: activeAnimation && `fadeShadow4 0.5s linear forwards 1s`,
   },

   '#shadow5': {
      animation: activeAnimation && `fadeShadow5 0.5s linear forwards 0.5s`,
   },

   '#shadow6': {
      animation: activeAnimation && `fadeShadow6 0.5s linear forwards`,
   },

   '@keyframes fade': {
      '0%': {
         opacity: '1',
      },
      '50%': {
         opacity: '0.15',
      },
      '100%': {
         opacity: '1',
      },
   },

   '@keyframes fadeShadow1': {
      '0%': {
         backgroundColor: '#dd43ef00',
      },
      '100%': {
         backgroundColor: '#dd43ef05',
      },
   },

   '@keyframes fadeShadow2': {
      '0%': {
         backgroundColor: '#dd43ef00',
      },
      '100%': {
         backgroundColor: '#dd43ef0a',
      },
   },

   '@keyframes fadeShadow3': {
      '0%': {
         backgroundColor: '#dd43ef00',
      },
      '100%': {
         backgroundColor: '#dd43ef0f',
      },
   },

   '@keyframes fadeShadow4': {
      '0%': {
         backgroundColor: '#dd43ef00',
      },
      '100%': {
         backgroundColor: '#dd43ef14',
      },
   },

   '@keyframes fadeShadow5': {
      '0%': {
         backgroundColor: '#dd43ef00',
      },
      '100%': {
         backgroundColor: '#dd43ef1a',
      },
   },

   '@keyframes fadeShadow6': {
      '0%': {
         backgroundColor: '#dd43ef00',
      },
      '100%': {
         backgroundColor: '#dd43ef26',
      },
   },
}));

export default Tab3Style;
