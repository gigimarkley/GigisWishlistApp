const Sequelize = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
  link: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESFBYREhIZFBgYHRwYGRgaEhIYGRkZGh0cGRgYFh0cIS4lHCEsIRgZJjgnKzAxNTU3HCQ7QEg0Py40NTEBDAwMEA8QHxISHzQrJCsxMTQ0NDQ0NDQ0NDE0MTQ0NDQ0NDQ0NDY0NDQ0NDQ0MTQxNDQ0NDQ0ND00NDQ0NDE0NP/AABEIAN0A5AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYEBQcDAv/EAEkQAAIBAgIEBwwHBwMEAwAAAAECAAMRBBIFBiExEyJBUWFxkQcXMjRTVHKBk7HR0hUzUqGisrMUFjVCYnPBI4KjQ1WS4SQlNv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACcRAQEAAgEDAwQDAQEAAAAAAAABAhESAwQxIUFxBTJRgSMzYSIT/9oADAMBAAIRAxEAPwDs0REBEi8XgTERAREQEREBERAREQEREBERAREQInznF7X277csx8dWyIWyO/8ASgBbbs4tyOeV9cJV4Hh+GfhFRqYLIvCBC6nKRmsalhYG+8iTIrctLVJmDoysWpglKi22WqABzbZmaxN788zZCZdpiIhJERAREQEREDwxObI+Xwspy9dtn3yo6tVMWa5Dlyu3PmvYHk37jfkHTLpItDLPp8splvWn1ERDV83i812lsXUprxKRe4NyptbZvmDq5jarqEdGIAP+oWuDt3bdvR6pnerjM+Pu1nSyuHP2WGJEmaMiIiAkSDumjw+IqFl47FywDoSQqqC9rHJ0NtsM2QbeeZNot030SBJkJIiIERE1OO0zTo1FpMCS1jcAWAJKi+3nEmTatymM3WzYXFvcbTSDVykLJvp5GRlNyWZmDcITfwrqNu+b4RIlLJfLyo0wqqgJOUAAkkk22XJ5TPaIhYiIgIiICIiAiIgIifIaB9REQPOogYEHl2GeeGw6U1CILAbh9894kam9p3daIkE2lX0nr5o/DkqapqsDYimubaOS+xfvkq2yLTEp+A7oej6rZS70id3CJlX1sCQPXLZTqKwDKQQRcEEEEc4I3wSyvmtXRBmdgo5ywA7TIoVEcZkZWB/mBBvbpErWJopiMe1LEcZURWpofBYnwm6SNot0dEnBUEw+P4HD8VGplnQHiqQdhA5Orpksf/W8vHpvX+rWJMRIboiVvS+umAwrFKlXM42FEUuQeY22A9ZmDhO6Po5zlY1KXS9PZ6yha3rk6RuLlMatg6bsrsisy+CSLkdU+sNiadVRUpurq20MrAg9RE95BZL5BJiISREQERED5vPFsVTDimXXOdoXMMxHOBvnsZo6mi6hqNYpkaotUtZuEBXKcq7LW4tr32AkQrlbPEb6J8iTCyYiIGq0tpenhrBrszeCoG1ju37hNLhsRXwjGviAWStxnylTwbXso38YZbDZzD12bFYVKilKihgeQi80OjNCMtQ8PZ0pcWgG2gKeNc35RcL6j0RXT0sunMLL+/8AfhYMNXWoodTdWFwbEbPXPaQBaTDmv+JnxUYAEk2A2k8wG+fc1Os1J2weJWn4ZpVAtt5OU7B0mBzjS+mMXpmucJg+LQG87QGX7dU/ZPIvL0ndaNDdzzBUVBrKcQ/KX2IOhUGy3XczWdyGtSNGugtnzhjzlCoCW6Lhu2dHk2+ykm/WqnpXULR9ZSEpcA3I1PZY9KnimUzRukMVoPEfs2Iu+Hc32Xy5SbGpSHIRfjJ/mxPX5odbdApjsO1OwDrdqbH+VwNl+g7j0HoiX8ps94ycdo3DYxVdhmFgyOrEGx2gqw5J6aL0RRwwIprYnwmJJZusmUnuX6aYZ9HVrh6eZkB3gBrVKf8AtY3HQTzTo8VExxt5a9UTm2vGtNWpV+jcDdnY5HdCcxY/9NCN1tuZuTosZZtd9O/sWGZl+sc5KfpEElvUAT1255ou5lq/wdP9uqi71fAvtK0z/Nt/mY7b81ucxPym3d1H3q73OcNSUNihwzkbUuRTXoAFix6Ts5hNtj9RdHVVKigKR5GpkowPPzH1gy0xG6cY47jdH47QVXhqL8JRc2NwQjcy1VHgtbcw/wDU6hoPStPF0UxFM8VhuO9WGxlPSDsmBrtVppgcRwlrFCoB5WOxAOm9j6pou5IjjCVGbwWrMU6giKxHRmB7DHmE9LpfoiJCxERAREQEREBERAREQEi0mICIiAkGTEDlGs+gcTo2v9I4G+S5LAC4p5t6uo8KmT2bN1gZbdVtccPjQEJFKtbbTY7zymmf5h98s7KCLHaDKFrJ3PKdQmtgyKFS5bJchC2+6kbUPVs6BJ8+VdWeF/gzk2E1u0lo1hQx9Jqq7lLWDkf0ONj+vb0y9aE1twWLsKdXK5/6b2R78wBNm9RMaJZVG16oNo/SFLSFIbKhDsP6kAV1/wByffedSw9Zaiq6m6sAynnDC4PYRK13RNG8PgahA41IiqvPxfCHrUt901upGn1XRb1HPiodT6KrnQD1ED1R5hPStFrQzaT0qmCBPB0zkJHMAHrN92XrWdWpoqgKosAAABuAGwATmvcpwJqPXxz7WPEB6WIqVCOvi/fL5pXTOGwq5q9VU5QCeMfRUbT6ov4J+a2U1Wm9OYbBpwleplv4Kja7nmRd590oulu6NVrNwGj6LZm2K7KGc9K0xew6W9YnzofUHE4l/wBo0lVbbtyZy1Ruh23IOhb+qNfk3vw11WpjNP4gKq8Fh0N72uqA7MzHc1Qg7huB5rk9X0bgqeHprRpjKiDKBvPWTyk7/XJwOCpUEWlSRURdgVRYD4npmVFqZNJiIkJIiICIiAiIgIiICIiAiIgRNPp3WLC4IKcRUylr5VALM1t5Cjk6Tsm3nI9ZMIMXpoYaoxysUQ2O0KE4QqvNfjbemTIrbpbe+Po37VT2Lx3x9G/aqexefVbVLRCbDhAT0PVPaS08v3Y0R5l+Op80aTxyfffH0b9qp7F474+jftVPYvPn92dEeZ/jf55H7saI8y/HU+eNHHJlaT1o0acOlWswelWzBVNJnvlJD5ktcZSLHplI1w0LoikwFOu9J3UOEWm1Wnlbap51vv2E9UvOI0Zo+pSSg2FU06e1EtYLffaxvtub8/LI0lovR+JYPWwodlAQHwTlG5eKwuBySZNFwyrleA1qxuHU00rGpTIK5agLqVOw2ucw2dMxMBpNqWHxOHF7VhT/AAMSb9YNpudVsBhamJxK1qIqIiuVQs4AIqBRtB+zsll+itG/9vT2tb4yuXUxxuqt0+26nUm8VIwes2LoUBhaL8EgLMSigOxYkm7G/JYbLbhPvRVLRznhMbiqzM21kSk5Zj/VUa5Pq7ZuNbsFhKeHDUMKtF86jMHqMbENcWY25JutVdCaOq4am9bChnsMzZ34x5zxgBJmeOU3Fb0M8bccvb1ZWi9b9C4VclBHQcpFB8zekx2n1zbYHXzR9aolFHcM5CrmpOq5jsAJ5LnZ65j/ALs6I8z/AB1Pnntg9BaMoutWnhArKcytmZrHkIBYi8nRMcn1jdfMBRqNSd3LISrZaTlcw2EA8tjs2Ty74+jftVPYvPrF6C0ZVdqr4QM7HMxuy3PKSAwF55fuxojzL8dT55Gjjk2Da5YEYcYvhG4MvwYHBvmz7Tly2vuBPNaRonXPAYqoKVOqQ7eCroyZjvspOwnZu3z4OjNHmiMN+yjgg2YJzP8Aave99pF7znWumjMPg8RQfCq1NX42XMTlemwsVJJNto2dEnSMpljN122J4YasHUEG/P1z3lVkSLyZX9O4HF1KtNqFTKq7xmK2N75iB4WzZbo6ZMm7q1FuosAMmfKz6kJIiICIiAiIgROWYv8A/Qp6S/oTqc5HpvFph9OitVNkVkJa25Wp5M3UCfuMmK5L5iPCbrM+JjVdLYUsxGIpkEkj/Vp8/XPj6Tw3l6ftafxl28sZkTD+k8N5en7Wn8Y+k8N5en7Wn8ZKdsyJh/SeG8vT9rT+MfSmG8vT9rT+MG4o2qPjOM9F/wBUSyys6nsDiMWQbgo5B5waotLNOLufunw7vp/9d+Wh1x8XHpp7mlh1N8Up9Q90r2uPi49NPc03GqWPophUV6tNSALg1EB3cxMv0PtnzWXcX+a/EWaJh/SeG8vT9rT+MfSeG8vT9rT+M6nNtmRMP6Tw3l6ftafxj6Tw3l6ftafxg2zJQe6P9Zhep/zJLl9KYby9P2tP4yia94+nWr0EpOHyAhipuLuwsoI3ni/eIU6t9HVtEHa3UP8AM2s1GiPCbqHvm3meXlGXkiJEhVEmV3WCs1xSqE0aB2msDclhtCn7G0Xvtva2y8z9DYitUQNVTKf5W3FxyOV/kvzXO+Tr02ry9dNpERIWIifDtYE80D6iVDRGstarWVHVcrkgAA3XYSNt9u7bLfJuNnlNlnkla1m1Rw+kMrVC1N1FhUTLe2+zBgQRzcolmkSFbNuDJqw9XHVcBSbamY5nFuKtrFrbr3E3HezxnlKf4pa9F6z1amlKuDamgQBgrBTnvTt4R5QbnZbZLDja7FioNgNnXL47t0pqSOZ97PGeUp/ijvZ4zylP8U6HmPOe0yMx5z2mX41XlPw573s8Z5Sn+KO9njPKU/xToWY857TJDHnPaY405T8OZakUWSvikO0pTKn/AG1FU+6WiVvVHxnG+i/6olknD3P3T4ez9Ov8d+Wh1wH/AMa/M6E9Vm+ImBobUjE4qktZHQA8hzX2i/uIm51gxrUKJdVDEsq8YXG25uRy7pYNVsU1TDrUPFLWJAJtew3S/b3LUnt6se+mPK5XzJPRVe9njPKU/wAUd7PGeUp/inQsx5z2mMx5z2mdfGvM5T8Oe97PGeUp/ijvZ4zylP8AFOhZjzntMnMec9pjjTlPw5FrLqrWwCo9VkYOxUZb7CFzbby5avai06fB4k56jFVdQxQIpIDXsNptyX5ph908k0aFzfjvy/0S96uViaNJCb2poR0cVdkrZYnGzl4Z2BwxQEtvP3T2r10QZmYKOckAdpntPDE4dKi5XUMOYi42bpllvXp5bSy318NdozTKVWZSVUhiqjMCWA3MBy+qbiabRmhUpMzMqscxZDl2qp3AX3Wm5mfS56/78r9Xhy/48PHEUEqKUdQym1wd2w3H3iewEmJqzIiICRJiBiUsDSRi6U1VjvYKATffMuJ41qgRWdtygk2BJsNp2DaYHreJW8Pw9f8A1lqhhTd2p5kqIWujAJUFhYKWG0A3tNhoPGcJTszl3Xw2NNkGY7bKCBsG71SdaVmW3P8AV/8Aj1brre5ZecV4bdco2gP49W663uEvOK8NuuXw8s8vH7ecRE2VIEQIHN9UfGcb6L/qiWSVvVHxnG+i/wCqJZJ5vc/dHtfTf678tDrj4uPTT3NLHqV4pT6h7pptYMRTp0SalPhFLKuW9tpuQb8lrHdN/qxUR8Or01yKbWXZxRlGyadtfE171j32M5W79dT0bmIidzyyIiBSO6d9TQ9N/wAkvGrX1dL+0n5VlH7p31ND03/JLxq19XS/tJ+VZnl7px8t/ERMW5ERAREQEREBERASDJiBon0O2YEVGZXdzWzOQWRkZVUAbAFJW1rbpssBhzSRaedny7MzWLEcgJ5bDZfomXIk7RMZFK0XiNHHStdKdFlxOVs1Qk5DbLnyi/FPg7bbbTd4rw265pNF6xLU0pWwv7MikBl4UAZ24O2xjbaNp6rD1bvFeG3XNMPLPLx+3lERNVCBECBzfVHxnG+i/wCqJZJW9UfGcb6L/qiWSeb3P3R7X03+vL5aHXHxcemnuaWPUvxSn1D3Sua4+Lj009zSx6l+KU+oe6a9t4nzXP3v35fEb+IidrzSIiBSO6d9TQ9N/wAkvGrX1dL+0n5VlH7p31ND03/JLxq19XS/tJ+VZnl7px8t/ERMW5ERAREQEREBERAREQEgyZBgcr1f/j1brre4S84rw265RtX/AOPVuut7ll5xXht1zTDyxy8ft5xETZUgRAgc31R8Zxvov+qJZJW9UfGcb6L/AKolknm9z90e19N/ry+Wh1x8XHpp7mlj1L8Up9Q90rmuPi49NPc0sepfilPqHumvbeJ81z979+XxG/iIna80iIgUjunfU0PTf8kvGrX1dL+0n5VlH7p31ND03/JLxq19XS/tJ+VZnl7px8t/ERMW5ERAREQEREBERAREQEgyZBgcr1f/AI9W663uWXnFeG3XKNq//Hq3XW9yy84rw265ph5Y5eP284iJsqQIgQOb6o+M430X/VEskreqPjON9F/1RLJPN7n7o9r6b/XflodcfFx6ae5pY9S/FKfUPdK5rj4uPTT3NLHqX4pT6h7pr23ifNc/e/fl8Rv4iJ2vNIiIFI7p31ND03/JLxqz9XS/tp+VZWddq2DSihxlN6il+IKbZWDBSWNywFst9l+brFq0KUOU09iFBlG0cWwy7+i0pl4q2Plu4iJg2IiICIiAiIgIkRAmJEXgTIMRA5XoA/8A31brre4fCXnE+G3XKbrXqljVxZx2AJJY5iFZVdXtYkZtjKR7yLETAq/vHe7K9zy8Hg/8CaY31Y5bX2Jz7NrDzP7PCfCTm1h+y/s8J8JptV0CBOf5tYfsv7PCfCRm1h5n9nhPhGx4ao+M430X/VEskqOE0LpikzvTourOCHNqJuCcx2EkDaL7Jk/senPJv/4YecnW6Nzu49DtO7x6ONxyl8+z31x8XHpp7mlj1K8Up9Q90p2M0PpmsuSpRdluGtlojaN27rMyMFhdO0VFOnTdFG4ZMM1vW1zL9HC4SbZdx18eplbjL6yR0iJz/NrD9l/Z4T4Rm1h+y/s8J8J0bcjoETn+bWH7L+zwnwjNrD9l/Z4T4RsbzXTSy4WkhNBK+d7ZangjKubNa2/k9ctOhKoqZagFg6hrc2YA2++cyfV3SuNqL+15lVdhZuDGVTvyKg2sdn+TOp6Kw+TcpVQoVQQdwsB9wErlfSpx8trEiJi3TEiIExIkwERECm65aqV8c9N6eK4JVUqUOfLe984ykbbGxvzCVzvZ4vzxf+b4zqsRuouMqlaY1RxNfDYbDrjGVqIsznPxzawbY17ryXP37ZGteqGIxjUimKKCmmQhs9mblfineeW/MJdok7OMcq72WL88TsrfNHeyxfnidlb5p1WI5VHGOVd7LF+eJ2VvmjvZ4vzxP+b5p1WI5U4xyrvZYvzxOyt80d7LF+eJ2VvmnVYjlTjHKu9li/PE7K3zR3ssX54nZW+adViOVOMcq72WL88TsrfNHeyxfnidlb5p1WJPKnGOVd7LF+eJ2VvmjvZYvzxOyt806rEjlTjHKu9li/PE7K3zR3ssX54nZW+adViOVOMcq72WL88TsrfNHeyxfnidlb5p1WI5U4xynvZYvzxeyt8ZPeyxnnidlb5p1WI5U4xyrvZYvzxOyt80DuZ4zz1R0jhrjpHGnVYjlTjFJ1s1QxGMNE08WVFNMhDZ+M2zj8UjaeX1TQd7PF+er2VvmnVIjdLjK5zoPUHFYfEU67YwFUYMVXhLsBvQ3a1juM6MItJi3aZJCIiQl//Z",
  },
  notes: {
    type: Sequelize.TEXT,
  },
});

module.exports = Item;