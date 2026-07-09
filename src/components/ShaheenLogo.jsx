export default function ShaheenLogo({
  size = 140,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shaheenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3EE7FF" />
          <stop offset="100%" stopColor="#0A66FF" />
        </linearGradient>
      </defs>

      {/* جسم حرف S */}
      <path
        fill="url(#shaheenGradient)"
        d="
        M175 40
        C140 18 82 28 63 66
        C54 83 61 100 82 106
        L136 122
        C164 130 168 147 150 164
        C129 184 91 184 64 166
        L50 188
        C86 214 142 214 177 188
        C210 163 208 123 168 110
        L112 94
        C94 89 91 75 104 63
        C119 49 147 49 168 61
        Z
        "
      />

      {/* جناح الصقر */}
      <path
        fill="url(#shaheenGradient)"
        d="
        M72 48
        C88 36 112 34 132 42
        L108 56
        L80 62
        Z
        "
      />

      <path
        fill="url(#shaheenGradient)"
        d="
        M66 63
        L111 71
        L84 83
        L58 78
        Z
        "
      />

      <path
        fill="url(#shaheenGradient)"
        d="
        M56 82
        L103 90
        L78 102
        L49 96
        Z
        "
      />

      {/* رأس الصقر */}
      <path
        fill="#071320"
        d="
        M154 60
        C170 60 182 70 186 82
        C181 80 174 80 169 83
        C164 86 160 92 159 99
        C151 90 145 78 154 60
        Z
        "
      />
    </svg>
  );
}