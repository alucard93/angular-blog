import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYYGBgYGBwcGRoaHBgYGhoYGBoZGhwYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrISQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0Mf/AABEIAJYBTwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgAHAf/EADcQAAEDAwMCBAUDBAIBBQAAAAEAAhEDBCEFEjFBUQZhcYETIjKRoUKx0VJywfAU4fEHFSRDkv/EABgBAAMBAQAAAAAAAAAAAAAAAAECAwAE/8QAIhEAAwEAAgMAAwADAAAAAAAAAAECESExAxJBIjJRE0Jh/9oADAMBAAIRAxEAPwBFSejaT0sYVe2pC5mi6ZoKLkVTqpHbXKObUwkcjaaGx1Us64Tenr/msXSqIxhQMz0C2ud4kFFbpCSeGnSyOyd7YRkV5pQ9AXNNMnU0PcU0xhK+mrraiFa+mrrdkI6DCi5ZhILlmVpLs4SOrTkoBFr2L5QYr7p7WCXFI7nWxBDMeZTpGUtjhzFDak/hXUHVaj2ElwAmfNal1vBVEToXmmh3sTd1FC1KSfRBU9qrNNMHUVF1FbTC80FzbUHjBH2TFlsSDCns2DLS4k8D6iO4HYdUlViGmdZnfEBc2k4RkjnP3jy/yvOazCHY5469P8r1TxDd0/hkNnOBPM8EA9Y+yyWl6ZueJ5/AHkpzxpVrcRnadg9xk/L+6Ibpvr7rZXOiAN3D1hButQg6ZReOTNVtNgIGtaOWtuaLf5x/lLawZ0KaaYlwjMvYQvm/1Ta4pcpZUpqpFrD40k8FONM01rw4ucBAmXbhxkwWyJ9eeMcpI0kKx1cnlBpvo0tLs1FvprNjXh+97pLmzGMQGjEuiep9MIuravYxgeDu2iZ5OOo5WSpXTg3bJ2zMDv3jutdaasx7GtrPcYAAO2XAdB9WQP8AMZU/yl6+Sj9aWLgXvYVAtTN9EcjIPB7hDvpK6ZDAH4eVYKKKoUJcjzaJXQUiXh+nkhMhpG50nhQ0ShDlqqNIcrl8lNVwdELjk8+fVzhcx6GlWUuVXBRhavymLHyUrpiCjKL8pWhkMmFMbZLGPlM7MqbQxuPDVvDN3dPC1LdFqjY0DsmieEmiNt6VFiqexFKDmymaAqFr6C+bYR7qaEuSGgkmAEjHT0VXrsFZzUNUawENyQq/E2skHazgjlYW+1E+6aZ0qpS5YXquql2CcpE6q5ztsHyA5Moyy06pcPa1gLnGJPRvqV6Z4e8IMogOf87+pPT07Km4JVaBeCNANCnvePnfmOw7LTmgr7mqym0ue4NA7lYvV/Gwy2g2c/UePZZCY2as0ELWtlnPDviWq+oGVQCHGBGCFtH00dEc4JH0VS6knD6KodRQ02Gc1vWBaUnPJIc75WBrWuJcfUQBHP8AKwtxrNeqZcSwE5I+o+QP6Rjp2Wu/9RaBdSpQ2XbzwOm2T+w+yyVtabhz5eQHX0CRtaVncwqtnbiXv4aYaOZI6k9eq0WnUOoyRAxwZSGs8N+VkECG+5649PynOjV9rskQDieYklLWvorCSHdan8v8SUmuqIbJjAEnj/e6f1qkjP3HZJLk7tw5gZ7+ynz9LcYZY3m94aw45dz0/wBCDuMmQcfsmFvpILt+ILsdI9xk8H7qd5bgOgdsfyrL/hGuVyKXjCXVG5Ta4ZASqoZ4VUznpAtViqIRTwqnhMIQBV1CrtPAPkex5Q5X0FBoyZ6HYAOpNMFxIJnjBcYJI7/5UHUkLoNw3/jt3H6Zb7AyP3Ti2LXkAdUq4QXyynT7f5k0q26JtrQNdyCjH28qVXyPMiq0plv3WgsmEiUJStZcAtDaW8NCjT9iqWHjtNqvptyqqbwiaK6iWhDFdTVDXZVrHZCVoKD6ITO1eldJ6NoPUmhzU6TeljmknHZbO0uWvEtK83tai1Ph26AcWk8jCEv1YLnUahcuBXLoOcg84WJ8Q6ywV20XP2tglx9sBa+9q7Wk9hK8p8W2ksFUnL5d7dP8Keay/jWLRfr9wGugO3Nc0lp+6zdhZurVWsZlzjHp5r5WcYbJJxj0THwtqgtq5qObPyED1MQnU4hqp0z1vRNHp21MAACB8zj1PUlKNW8YsZLKI3u7/pB9Vkdb8WvrAMJ2N/VtPPlPZITcx9JRmf6BJfRlrt9UrEOe8mf0jgeyGtrUyJzMQVRTcSCTmeFsPAlm2pV+YbgxsmeJnA/f7JniC2G+EvDh3/HfOPpHHvC2j2IvYBgBQc1KRb1ifUquxpKy3/v43QXR5nhaDxO0hh9F5+aY3yRInIxkdfwldYFIN8c6iX27fh4IyXAyW7vlIBGIIPPt1WZ0WtFMwcwdsD9R7nk/snniawDqJc1wbTa2QB9TyAInsOMeSx9gSYbmOPsO4SJ6tKTwwm+hjRuMu+XiMz5HlMtPtS5zSx3DgXQcc9B06cd0tbp9S5qfL9Lfl3dMTJPnIj2VF1pbqbobcMEH+sfsCtq63kpzu5wejOoy5oBiR+ev7pLcUhSa+o84cXt9x/pCV6Y65a0HfvGIIdOJ7lOdapPNk8vABLt0dfm5/ZR38s0ruzuHy5pMaGMLg0Npg5gZInJ9istf39IcPyO2UNqWpOq7G/qDA0+2EtdZsB+YucRyBAjy9fJXic5ZG63iS6vqDCIE+qA8wZU3No8Q8H2Kpq0w3LTIVkznpM55yqKitKreEQFQX1qiFNoRFHul14phoHUk/wArS6bX2gO7HjyKzVB9MUmNDCKkkufJLS05AAnBHomFrcwCJ9UFOob2xm2oVN4DwSMTnsn9hb72zI/7Xn1lq8U3MjpgozSPF3w9zXtcQTIIjnsZPCj6amV9lqNpbM+cjsnlDhed2HiYF5LsStnp+ote2ZUnDkZUmePU0Q16GpK2V0Ey4PRFGrlDBvVfWNKARiKqOo1kmaUZbvS0hkP7SonVpWIggws3bPT21fgJPUbT0LTq+9gKLS3RI+GITNVhbJz1wxH4qqFtu+OSIHuvMtUa80RumeAOy9C8X3Pytpty4mY8u6yN/bufspNbklU8fjb5Ky8kyhsgXDeYa0CfNKtTqjd8ogLZ32hvpuh4lo691mNWsxJI69Fb/H9RvYRuaTJBV9pRJiTA7qz4BAjur7hhAA29FOpZkvp9NUn5WkQMeq9a/wDTqxLLbe4QXnH9o/0ryS30520PaczMei9k8C6qa1HaQAWQMY6dlKk0ZvUaRwUAxWuKi54AlJpPBT4gobqR9F5nVbBW917U/lLR1wsbUpylb5GSBqNFrg5rhIcxzfcjCzHh5sPAI/U4QfflbG2pwZ7LKMcG3ZY3j4jz55JJW+Mee0F21s91qxlHJe4l56NEuOSenCTeJtE+A8BrtxMQDBcWnAeZ5JcDgYAWu8GUA9lVpd8vxDEEEtP1dPUJnf6O94h1V2xvE5z5Dp0SKvVsvUKkjFaTTLXhgdtLhyASw/3gcf3BafxFU22oa8/NAkT1HpzwrNK0wMcXgnaMucczH6R5JP4zuCWRBGOFon2rRqfrGGHo5fjv/sLR2FlO8VGFjS1zWmNwG4fUS3O49wMLM0itTpmq7WQciP8ApV8m/Dm8ePhmer2bW1HZaG/pAdMSPpB7CevZAmnytVqPw3HdAk84SK6bJhoTzWguc6F9ZpCpJR1yyGweiBTokypyKsGNc9oeSGT8xHIb1Iwhw2URbth4CzAgt7mhx2EloJ2k4JHQkdCpCplUkKVPlEAbRqFS2Sqw4BSD0DBlMABGW+rVGCGuShlTKIDglpDJn1joRLGyhxCJpOAT+oUy1pgZVtNwhUkgqTAh6hPpdlF0ChMIm3Q9BtGts5ObZyRU3AI+2ugmnxoOm40G/LSGuOCtYHYledWF23C2NpfB7QAeid+HOUTrkjU0pryajvqP0+QHChY6cGv3uGU1NZoHIU6ZBCPvWYxfZ9CPxBbb2kQsFfaGXuOOV6tXpBwIKTVrIk/KFXx2vXAy22eYXGmbHS4cRCAvxI8l6Bq1hkyIWPv9PzC1JM6lLwzlndFjx2mIXo/gCowVXtY6dzNxyOf9lYOtp0vgdAr9PvHWhLmGHlpBPPPkua5dLgRznZ7oQgdSqgMOeiw3hDxo6rNGqfn/AEu43eXqnuo3DtpBXO5aeC4I7+vJ90vNQKOoVIS8156oqNM2FOu9pWTvj/8AJqOb/S54/wDyEzuH55QVKnNWf6mFnuQYVF4zKuTUeE6QZaMLeXN3H+49T9ke7fUcC+dnrIP8pT4NrNNtTaT8x3gD+1x47ELYXT2spy8jaxuOgU68S51nQqfGAlwJa1jYAn2gZ/wsl4lqtc17CBiJP/ajd6rcuFJzKbXU3udlx2zDiB8/DZAHIykmv3D2vfvG0Ob8oDgRHaQhKaeIa0s5M4aByQeD+yIta0jzHIQIJnJ9gibX5XBx4PPoVdo412Hh46jn7Kq5uWtaYEEo64owOOmEkvB0SSkxq1FFR5OSh4VvSFUnJMi1vXsiLYS4e6raMYHKLs2bSeuCJ9YyEcASe1VwiXKIYiKfaMlEOGFXRU6zoSvsYqIUmvhVbl25bABTHdURSqylFasYU7CvBWGY9phfS5So5yo1BlBhTJNKOotS9pRtA7gsg6EvKnSqIdjoMFW7OyKDo2tLmFpNNuzIExPKxlIwnmm1PoHnJ9AumK+C0x9V1HY+JwtNpVy6GB0AOkj7Lz+2purXD3NB2M5PRMr/AFF5fTYJENn7qvkac8klO0bO4vxJAPBhHUCIXnNe8LCBJMp/pmqOaxrnAmeFyW0lwdf+HZ47Geu0m7fNZKvp8zAWnoE1nfNwnDLVgEBoUPaq6KryrxSpfLPJb2ycwkgZKy15RIcdy9l1XTRuJAHCwPiPTW7zBzHCReRp4xq9bnUZ7w9S23TXAYA3LbX+o7kp0fTfhsLiDud37KN5KNV7M50sA9TrByXB8Imrbk5Qr7cooDZBg3ORTbU4LTmRCjaW5B4TGnggxwQfsU2ipmS0u5fTqQwE7KhGO7iQA7ymfut9qtd9WhTp5a+qQ092j9R9gCUv0vTmf8+5aIghj2j1LpH5THWrplu/4joJa3axvmfqPl0HuVG2/bDrhpTrLr17KTNshjGNADcTDYGBOeg91gNUvKTnl7ZMSNp/JH3P2TC9rGsz4tZ7aYdO2BLyJiBBkxAMnuVnbq3oklzHPOcD5SfeOEZS0W3TXHQFVe3ccdf9Kkx44Ua7WThrx9yf2VTmgHBz54OFdM5mmmaCyrb2bD9TPy1Jr1kH3Uba7cxzSen2I6oi/b8xHv8AdIljGp+0gNQYQyuPZVPVESZZRb5oxmAhLagSC6ev8I4hFAZAuUmlfHBfAiKSlfHPlfQF8hbDEmU5VlOhmCp2xyr6gzhKwiltPcqtpaUVb1Ap3FLcJCHQ3aCrC8xBTRzQRIWWpPgprbXZiEQBhV1tcFpQzKk4Vm1DoOhbqkulMrKpuwUpptKOtjnC2mYyFA8pxoNFrnua8wAwx6oazcCBKMo2Rc4iS30wqRSVaK/4NdNcKNtEfM9zyT12zz9oSk3gNX4gGNu37f8AlPa9qQ1jTyGbVRbaWILSPRby+Ts0fDN3tQueCJzwFqL+rtZSa0xDM+qEOn7KrABMfwqdee4OaOCOy5nW8HXNYtG+larsI3FaUauyM8ry6zuT8UT6/ZQvNadvcQcTH2U9qXwZqb5ZtdW15okmMLG070VquCe56iEh1TVXPEDk8r74dqzvPUQFlL7YXSX4o1lxc9AcJVdV+VVcPI4QfxSU8onTOdclDOrFSqOhDPqBUwk2EtuiFxvigTUVFSoipA2N/D985t1uc6d7HAk9Njhj7GfdW65T+PdbWndgEmJDfRvf+Vmn14yDDm/M09+jm+4P4T2zunOYXs5wCTmYAAzPkFHyS09R1eOlSSY6fo9Gk3eWl5xl0E9sYx7LI3+tje8NYG8jOTjqnF9qFV+1k7AcOkeUkR1WU1O1l5c3iB0zx+6ELexvJTX6nXN25wB+X7D/AH/yh9sjIVBbt6oprCWzKv0c7bb5KmUpcAO8R6qy/f8AOQI4HH7qncG+qHdUlxJWzkVskQqS0mYypl/ZMNBaPjNnzTCdhdvpjhTY7uJ/JVT6cLfX1Fnwd0ZiI7LIXjFpYaWCtzFAtRDiqXvTCH1qi5c0r45yxixnKtdUhUNcpvEhKzIVsdCZWr5EeSVwjLR8EIYMRuaJaVdp9QbhKNuWhwSlw2laQs09S13DcFVSfmCoaVeY2kpq+y3ZCLWikxb/ACghEW1HKutKRAgprbWgJQcm0I0y2Jha3S9Ol+Uv0yzAiFq9NpAZSrsxIaeCZcrTZMjhFr4mcp9mElTTwHhxWd1Sy3vJIxJW5ewFKdUtx9wuepaY6rg80NEsqgx1I+6Qak0se4eZ/OVv61o01G/3BIvF+nNZUn+poP2kJpltlFRh6byS49srQ6NbbGEnDnnd7dAhtIsWkun9ZDRjoMlaGvbN7n7KtQ0sAnotq1AUvq4TV9o3ufsqatqw/q/CyhmYne+VUQmVS0Z/UqH0GD9SdQybAHhDvCOLG/1Kt1Hsn9GJovqsDgQeyssr40j2xHGD5Ij/AIpXyvpv0tfg1HNDR5OJG72SVGrkeKx8A97qjnuBnjiIAQ9zXkCOYz691fc6PUpna4bo5IzHr2S99N0/dIo/hWqf0GqvMzwpMrkDKsNq455VT7Y+ib1J6VVnyqoRLLeT3XFiOAKmNRunvDHyeg/MhVmlEGVVcOWwBrK2sOc3aeyXPqSEosa3TzTJhRUgbKKhVJKNqMCCeEcAfC5VOerKdMuOFXUp7TBWMWUTlWueo0gIUS/zQMDPZCgx8FGupygq1OEiY7QWKxUaokShqb0WxmFmZELeuWlafT9T4WVeyCirKtBCOinoVrchyY0qpCyGmXUJ/wD8kECCi1wLvJrdOvPNaawvxgSsNZNJZuAMq+21bap0mjM9Ka6VJZLS9YLsA4CbVNSgTwOPdZWFDKvVDRJSLVLzzHCjbakHvexx6Y9QspruobXOE4GFKm3RRL8dIX2ow8GeHD90p8d13/Ga0cFjfySlD7+XiciQPytV4rrUqlVpbnbTbjsZMLLfZIM/qzOaaS0l3Ro2j1PJVtxqLh1VL3gCAg6707ptjSsQS/VH90M/V3g4j7IR7kLVcnTZmMXa2/uPsFRU1yoeo+w/hLnOVDymVMm0HP1V56j7D+F8N8936kCBKvptAEngJvZ/0X1RZ8VxPKDruebgkAjId1gfwJTCwqB5LQyXE46EdBj1hTbl52t/+uHz8wxkkdvpn7pKp6PErB3ptEvYGEu3c56uyTg+6X6jpA3E8nt6T14BTDww/ZWDXc9RzggEZ44IytNrVvR2OIaWvHJAJJBAjjk49cqDqk+zr/Gl0eVVrR4OJHv/AApi1JBnkflax9j1f04OeD+6W3rI4Gf94/KK8jfAr8eCNp2tIjk89vRDmmYlNby2dsa4ggFxjzwJQlMYOMEKzrgi5Bnv+UDz/ZBVkwuqcR5jhL6jkUybR9onbk+qLbdT5INx58uFwHRMKMQ+UM85Q5eWqwPlYwXaPDMnhaH/AIDKtIvPMSD91mWvnBCsp6i9gLWk7T07JWm+gppdlTiQS3sqXKTHgkl3Yx69F8c1MKGmltMTMhCXgXLkj7HX6gQKYW9TC5ciKTAlDzBXLkAsaWVY4Wk0o7nsB4lcuTLtCM9PraeBbOe0x8oMfbCxN7z5kCfVfVy3mBIyoVPhU9wyUTa3Tn0SSczIXLlzvoYmJZUGcuaTI9FjdbrHcRPBP4K5clX7F/8AUF0yykh5PmB6HqnbbYND3nJc78AYC5cinywpcIVXAhxQbl9XJwA1coR65cmQGVOCjtlcuRFGDLBrWl7yXQJgY9pQTahqSA0Db83JgNngCMnzK5cmkHk4NLW0uhQqOMPqOAlhc7aGyDDjt+ojHYJBe0QCQO0ewkZXLkvk7Q3j6Kf+a+mQQfp7eQjn0Xoeh3XxqDqhk7XxnB6weT0GVy5SpcFofIFq9TE9YSCgzfIJ6SuXKcfSzL72nNNrR0E58wJHolbLcZ9Pyvi5W+k6Qsu6nkggZEL4uVJOeiNQ/hW20FwBE4P4C5cnRMnXpx7lBFhGQVy5YxezMHhW/BknPAlcuRYClgVoXLkDI//Z ';
  contentTitle: string = 'Minha nóticia';
  contentDescription: string = 'ola mundo!';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];
    
    this.contentTitle = result.title;
  }
}
