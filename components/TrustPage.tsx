import { Star } from "lucide-react";
import Image from "next/image";

export default function TrustBadges() {
  return (
    <div className="mx-auto my-8 max-w-4xl rounded-xl bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="text-sm font-semibold">
            <div className="text-gray-900">150+ Students</div>
            <div className="text-xs text-gray-500">
              Trusted Us To Write Their Papers
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-black ">
            <svg
              width="32"
              height="30"
              viewBox="0 0 32 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3327 22.6535L23.0244 20.9577L25.8202 29.5744L16.3327 22.6535ZM31.7327 11.516H19.9536L16.3327 0.424377L12.7119 11.516H0.932739L10.4661 18.391L6.84524 29.4827L16.3786 22.6077L22.2452 18.391L31.7327 11.516Z"
                fill="#0AB67B"
              />
            </svg>
          </div>
          <div className="text-sm font-semibold">
            <div className="text-gray-900">Trustpilot</div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0" y="0" width="21" height="20" fill="#219653" />
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33313 10.479L10.3748 9.70821L11.6456 13.6249L7.33313 10.479ZM14.3331 5.41655H8.97896L7.33313 0.374878L5.6873 5.41655H0.33313L4.66646 8.54155L3.02063 13.5832L7.35396 10.4582L10.0206 8.54155L14.3331 5.41655Z"
                      fill="white"
                    />
                  </svg>
                </svg>
              ))}
              <span className="ml-1 text-xs font-bold">4.7</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-6 w-6">
            <Image
              src="/star.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-full w-full "
            />
          </div>
          <div className="text-sm font-semibold">
            <div className="text-gray-900">Sitejabber</div>
            <div className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10ZM10 4.66667C10.1268 4.66662 10.2509 4.70273 10.3579 4.77074C10.4649 4.83875 10.5503 4.93586 10.604 5.05067L11.8933 7.8L14.7667 8.24C14.8877 8.25866 15.0012 8.31028 15.0948 8.38919C15.1884 8.46811 15.2585 8.57128 15.2973 8.68739C15.3361 8.80349 15.3422 8.92805 15.315 9.0474C15.2877 9.16675 15.2281 9.27629 15.1427 9.364L13.0453 11.5147L13.5427 14.56C13.5629 14.6836 13.5479 14.8104 13.4994 14.9259C13.4509 15.0413 13.3709 15.1408 13.2685 15.2129C13.166 15.285 13.0454 15.3267 12.9203 15.3334C12.7953 15.3401 12.6708 15.3114 12.5613 15.2507L10 13.8347L7.43867 15.2507C7.32905 15.3115 7.20448 15.3403 7.07927 15.3336C6.95406 15.3268 6.83328 15.2849 6.73081 15.2127C6.62833 15.1404 6.54831 15.0407 6.49994 14.925C6.45157 14.8093 6.4368 14.6824 6.45733 14.5587L6.95467 11.5147L4.856 9.364C4.77018 9.27624 4.71026 9.1665 4.68283 9.04686C4.65541 8.92722 4.66154 8.80233 4.70056 8.68595C4.73959 8.56958 4.80998 8.46624 4.90398 8.38731C4.99799 8.30839 5.11196 8.25695 5.23333 8.23867L8.10533 7.8L9.396 5.05067C9.44975 4.93586 9.53512 4.83875 9.6421 4.77074C9.74908 4.70273 9.87323 4.66662 10 4.66667Z"
                    fill="#DF7139"
                  />
                </svg>
              ))}
              <span className="ml-1 text-xs font-bold">4.0</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-6 w-6">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-sm font-semibold">
            <div className="text-gray-900">ExpertBuddy</div>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-1 text-xs font-bold">5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
